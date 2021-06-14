from django.http import JsonResponse
from django.shortcuts import render
from .models import Post
# Create your views here.


def postView(request):
   post_data = Post.objects.all()

   return render(request,'post.html',{'post_data':post_data})


def testAjex(request):
   return JsonResponse({'text':'hellow from ajex'})


def postViewAjax(request,num_post):
   visible = 3
   upper = num_post
   lower = upper-visible
   total_number_post = Post.objects.all().count()
   all_data = Post.objects.all()
   data = []
   for value in all_data:
      item= {
         'id':value.id,
         'title':value.title,
         'body':value.post_body,
         'liked': True if request.user in value.liked.all() else False,
         'like_count':value.like_count,
         'author':value.author.user.username
      }
      data.append(item)


   return JsonResponse({'data':data[lower:upper],'size':total_number_post})