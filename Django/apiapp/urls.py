from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from apiapp.views import SkillView, ProjectView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("skills", SkillView, basename="skills")
route.register("projects", ProjectView, basename="projects")

urlpatterns = [
    path('', include(route.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)