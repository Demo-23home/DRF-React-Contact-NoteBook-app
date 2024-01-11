from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission  # Add these imports
from django.db.models.signals import post_save
# Create your models here.



class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, unique=True)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def __str__(self):
        return self.username
    


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    full_name = models.CharField(max_length=300)
    bio = models.CharField(max_length=300)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)


    def __str__(self):
        return self.full_name
    
    
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        


def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()



post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)




class Contact(models.Model):
    contact_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contacts_created')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contacts_updated')
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('id', 'updated_at')  # Prevent simultaneous updates


    def __str__(self):
        return self.contact_name
