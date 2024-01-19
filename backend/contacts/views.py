from .models import Contact
from .serializers import ContactSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
import redis
from django.conf import settings
import pickle 


redis_conn = redis.StrictRedis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=settings.REDIS_DB)

class ContactListCreateView(generics.ListCreateAPIView):
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        redis_key = f'contact_list:{self.request.user.id}:{self.request.query_params.get("search", "")}'
        cached_data = redis_conn.get(redis_key)

        if cached_data:
            # Use cached data if available
            return pickle.loads(cached_data)
        else:
            # Execute the original queryset
            queryset = Contact.objects.all()

            # Implement search functionality
            search_param = self.request.query_params.get('search', None)
            if search_param:
                queryset = queryset.filter(contact_name__icontains=search_param)

            # Cache the queryset results
            redis_conn.set(redis_key, pickle.dumps(queryset), ex=30)

            return queryset

    
    def perform_create(self, serializer):
        # Automatically set the created_by field based on the current user
        serializer.save(created_by=self.request.user, updated_by=self.request.user)

    def perform_update(self, serializer):
        # Automatically set the updated_by field based on the current user
        serializer.save(updated_by=self.request.user)




class ContactDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]

