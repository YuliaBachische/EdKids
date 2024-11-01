from django.shortcuts import render
from rest_framework import viewsets, status, generics
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


