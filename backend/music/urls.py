from django.urls import path, include
from .views import *

urlpatterns = [
    path('artists',Artists.as_view(), name='artist'),
    path('albums',Albums.as_view(), name='albums'),
    path('songs',Songs.as_view(), name='songs')
]
