from .models import Contact
from .serializers import ContactSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics



class ContactListCreateView(generics.ListCreateAPIView):
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Contact.objects.all()

        # Implement search functionality
        search_param = self.request.query_params.get('search', None)
        if search_param:
            queryset = queryset.filter(contact_name__icontains=search_param)

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

