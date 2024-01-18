from django.shortcuts import render
from .models import Profile, User
from .serializers import UserSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Contact
from .serializers import ContactSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer




@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dahsBoard(request):
    if request.method == "GET":
        context = f"hey {request.user} you're seeing a GET response"
        return Response({'response':context}, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        text = request.POST.get("text")
        response = f"hey {request.user} this is an POST response , your text is {text}"
        return Response({' ':response}, status=status.HTTP_200_OK)
    else:
        return Response({}, status=status.HTTP_400_BAD_REQUEST)
    


#Get all Routes
# Get All Routes

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)






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





