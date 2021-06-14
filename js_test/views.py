from django.shortcuts import render

# Create your views here.


def test_js(request):
   return render(request,'test_js.html')