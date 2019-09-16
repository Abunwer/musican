import graphene
from graphene_django import DjangoObjectType
from .models import Album, Artist, Song
from django.db.models import Q


class AlbumType(DjangoObjectType):
    class Meta:
        model = Album


class ArtistType(DjangoObjectType):
    class Meta:
        model = Artist


class SongType(DjangoObjectType):
    class Meta:
        model = Song


class Query(graphene.ObjectType):
    albums = graphene.List(AlbumType,
                           search=graphene.String(),
                           )
    
    artists = graphene.List(ArtistType, search=graphene.String())
    
    songs = graphene.List(SongType, search=graphene.String())


    def resolve_albums(self, info, search=None, **kwargs):
        qs = Album.objects.all()

        if search:
            filter = (
                Q(title__icontains=search) |
                Q(price__icontains=search) |
                Q(release_date__icontains=search) |
                Q(genre__icontains=search)
            )
            qs = qs.filter(filter)

        return qs

    
    def resolve_artists(self, info, search=None, **kwargs):
        qs = Artist.objects.all()
        if search:
            filter = (
                Q(first_name__icontains=search) |
                Q(last_name__icontains=search) |
                Q(gender__icontains=search) |
                Q(nationality__icontains=search)
            )
            qs = qs.filter(filter)
        
        return qs
    
    
    def resolve_songs(self, info, search=None, **kwargs):
        qs = Song.objects.all()
        if search:
            filter = (
                Q(title__icontains=search) |
                Q(length__icontains=search)
            )
            qs = qs.filter(filter)
        
        return qs

   

class CreateAlbum(graphene.Mutation):
    title = graphene.String()
    release_date = graphene.Date()
    genre = graphene.String()
    price = graphene.Float()

    class Arguments:
        title = graphene.String()
        release_date = graphene.String()
        genre = graphene.String()
        price = graphene.String()


    def mutate(self, info, title, release_date, genre, price):
        album = Album(
            title=title, 
            release_date=release_date, 
            genre=genre, 
            price=price
        )

        album.save()

        return CreateAlbum(album=album)


class Mutation(graphene.ObjectType):
    create_album = CreateAlbum.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
