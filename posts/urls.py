

from django.urls import path
from posts import views

urlpatterns = [

    path('',views.postView,name='post_view_link'),
    path('AjexResponse/',views.testAjex,name='ajex_response_link'),
    path('postViewResponse/<int:num_post>',views.postViewAjax, name='post_view_response_link')
]
