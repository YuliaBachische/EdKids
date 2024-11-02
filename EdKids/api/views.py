from asgiref.sync import sync_to_async
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView
from django.http import JsonResponse, HttpRequest, HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from rest_framework import viewsets, status, generics
from rest_framework.response import Response

from .models import Course, Lesson
from .serializers import UserSerializer, CourseSerializer, LessonSerializer


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


def index_view(request):
    return render(request, 'api/index.html')


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class Login(LoginView):
    template_name = "api/login.html"
    redirect_authenticated_user = True

    def get_success_url(self):
        print("Redirecting to success URL")
        next_url = self.request.POST.get("next")
        if next_url:
            print(f"Redirecting to next URL: {next_url}")
            return next_url
        print("Redirecting to index")
        return reverse_lazy("index")


async def register(user):

    await sync_to_async(user.save)()
    authenticate(username=user.username, password=user.password)

