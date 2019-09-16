from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import AlbumSerializer, ArtistSerializer, SongSerializer
from .models import Artist, Album, Song


class Artists(generics.ListAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistView(APIView):
    serializer_class = ArtistSerializer

    def get(self, request, **kwargs):
        if 'arid' not in kwargs or not kwargs['arid']:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            artist = Artist.objects.get(pk=kwargs['arid'])
            return Response(self.serializer_class(artist, context={'request':request}).data)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class Albums(generics.ListAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


class AlbumView(APIView):
    serializer_class = AlbumSerializer

    def get(self, request, **kwargs):
        if 'alid' not in kwargs or not kwargs['alid']:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            album = Albums.objects.prefetch_related('songs').get(pk=kwargs['alid'])
            return Response(self.serializer_class(album, context={'request':request}).data)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class Songs(generics.ListAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class SongView(APIView):
    serializer_class = SongSerializer

    def get(self, request, **kwargs):
        if 'sid' not in kwargs or not kwargs['sid']:
            return Response(status=status.HTTP_404_NOT_FOUND)
        try:
            song = Song.objects.get(pk=kwargs['sid'])
            return Response(self.serializer_class(song, context={'request':request}).data)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)