from django.db import models

from users.models import Users


class Project(models.Model):
    project_name = models.CharField(max_length=64)
    github_url = models.URLField()
    users_involved = models.ManyToManyField(Users)


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    note_text = models.TextField()
    create_note = models.DateTimeField(auto_now_add=True)
    update_note = models.DateTimeField(auto_now=True)
    user_note = models.ForeignKey(Users, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
