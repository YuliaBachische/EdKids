from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    age_recommendation = models.IntegerField()
    is_premium = models.BooleanField(default=False)


class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=255)
    content = models.TextField()


