from django.db import models
from datetime import datetime

GENDER_CHOICES = (
    ('M', 'Male'),
    ('F', 'Female'),
)

class Artist(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    nationality = models.CharField(max_length=50, default="")

    def __str__(self):
        return self.first_name + ' ' + self.last_name

class Album(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField(default=datetime.now())
    genre = models.CharField(max_length=50)
    price = models.FloatField(max_length=10, default=0.0)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Song(models.Model):
    title = models.CharField(max_length=100)
    audio_file = models.FileField(null=True)
    length = models.IntegerField(default=0)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

