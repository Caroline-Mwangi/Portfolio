from django.shortcuts import render
from .models import Skill, Project
from .serializers import SkillSerializer, ProjectSerializer
from rest_framework import viewsets


# Create your views here.

class SkillView(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    
class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer