from .models import Contact
from .serializers import ContactSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
import redis
from django.conf import settings
import pickle


redis_conn = redis.StrictRedis(
    host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=settings.REDIS_DB
)


class ContactListCreateView(generics.ListCreateAPIView):
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        redis_key = f'contact_list:{self.request.user.id}:{self.request.query_params.get("search", "")}'
        cached_data = redis_conn.get(redis_key)

        if cached_data:
            return pickle.loads(cached_data)  # Use cached data if available
        else:
            queryset = Contact.objects.all()  # Execute the original queryset
            search_param = self.request.query_params.get("search", None)

            if search_param:
                queryset = queryset.filter(contact_name__icontains=search_param)

            redis_conn.set(
                redis_key, pickle.dumps(queryset), ex=30
            )  # Cache the queryset results

            return queryset

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, updated_by=self.request.user)


class ContactDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        instance = self.get_object()

        instance.updated_by = request.user
        instance.save()

        return super().update(request, *args, **kwargs)
