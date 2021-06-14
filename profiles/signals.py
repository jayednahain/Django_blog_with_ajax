from .models import Profile
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save,sender=User)
   #the sender is the user
   # user will create information "hey i have created do something"


def post_save_create_profile(sender,instance,created,*args,**kwargs):
                           #sender who sending the signals
                           #Instanve is the user instance
                           #created is boolean value:
                              #it can be true only once if the user is created
                              #when
   print(sender)
   print(instance)
   print(created)
   if created:
      Profile.objects.create(user=instance)