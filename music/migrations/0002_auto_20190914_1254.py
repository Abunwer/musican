# Generated by Django 2.2.5 on 2019-09-14 12:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='release_date',
            field=models.DateField(default=datetime.datetime(2019, 9, 14, 12, 54, 16, 366923)),
        ),
    ]
