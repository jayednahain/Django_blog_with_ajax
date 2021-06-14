from django.db import models
from django.contrib.auth.models import User
from profiles.models import Profile

# Create your models here.


class Post(models.Model):
   title = models.CharField(max_length=200)
   post_body = models.TextField()

   #user who liked posts!
   #like field will be empty if a post is created
   liked = models.ManyToManyField(User,blank=True)
   author = models.ForeignKey(Profile,on_delete=models.CASCADE)

   post_update_time = models.DateTimeField(auto_now=True)
   post_created_time = models.DateTimeField(auto_now_add=True)

   def __str__(self):
      return str(self.title)

   @property
   def like_count(self):
      return self.liked.all().count()