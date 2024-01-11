from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import *





urlpatterns = [
    path("token/",MyTokenObtainPairView.as_view()),
    path("token/refresh/",TokenRefreshView.as_view()),
    path("register/",RegisterView.as_view()),
    path("dashboard/",dahsBoard),
    path('',getRoutes),
    path('contacts/', ContactListCreateView.as_view(), name='contact-list-create'),
    path('contacts/<int:pk>/', ContactDetailView.as_view(), name='contact-detail'),
]
