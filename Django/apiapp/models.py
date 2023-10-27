from django.db import models

# Create your models here.
class Skill(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    title = models.CharField(max_length=200, null=False, blank=False)
    description = models.TextField(null=False, blank=False, default='This is a skill I offer')
    
    def __str__(self):
        return self.title
    
class Project(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    name = models.CharField(max_length=200, null=False, blank=False)
    title = models.CharField(max_length=200, null=False, blank=False)
    description = models.TextField(null=False, blank=False, default='This is one of my projects')
    
    def __str__(self):
        return self.name

