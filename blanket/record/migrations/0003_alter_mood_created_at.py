# Generated by Django 4.2.4 on 2023-08-23 02:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0002_alter_mood_created_at_alter_mood_missions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mood',
            name='created_at',
            field=models.DateTimeField(default=datetime.date(2023, 8, 23)),
        ),
    ]
