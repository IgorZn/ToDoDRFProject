from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Todo)
class AdminTodo(admin.ModelAdmin):
    list_display = ['title', 'body']
