from django.shortcuts import render
from .models import Skill
from .serializers import SkillSerializer
from rest_framework import viewsets


# Create your views here.

class SkillView(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer