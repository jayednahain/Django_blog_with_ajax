

from django.urls import path
from js_test import views

urlpatterns = [

    path('',views.test_js,name='test_js')

]
