from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [
    path('users/', views.UserListView.as_view(), name="users"),
    path('login/', views.Login.as_view(), name="login")
]
