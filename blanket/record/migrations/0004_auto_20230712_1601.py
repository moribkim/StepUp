# Generated by Django 3.2.20 on 2023-07-12 07:01

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0003_mood_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mood',
            name='colors',
        ),
        migrations.RemoveField(
            model_name='mood',
            name='selected_words',
        ),
        migrations.AddField(
            model_name='color',
            name='mood',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='record.mood'),
        ),
        migrations.AddField(
            model_name='mood',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='word',
            name='mood',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='record.mood'),
        ),
    ]