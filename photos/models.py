from django.db import models
from django.contrib.auth.models import User


class Photo(models.Model):
    class Meta:
        verbose_name = 'Photo'
        verbose_name_plural = 'Photos'
    

    image = models.ImageField(null=False, blank=False)
    description = models.TextField()

    def __str__(self):
        return self.description