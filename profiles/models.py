from django.db import models
from django.contrib.auth.models import User
# Create your models here.




class Profile(models.Model):
   user = models.OneToOneField(User,on_delete=models.CASCADE)
   bio = models.TextField(blank=True)
   profile_pic = models.ImageField(default='defult_profie_pic.jpg',upload_to='profile_pic')

   profile_update_time = models.DateTimeField(auto_now=True)
   profile_created_time = models.DateTimeField(auto_now_add=True)

   def __str__(self):
      return f"Profile of the user {str(self.user.username)}"
