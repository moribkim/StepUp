# Generated by Django 4.2.3 on 2023-07-20 12:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mission', '0001_initial'),
        ('record', '0004_auto_20230712_1601'),
    ]

    operations = [
        migrations.AddField(
            model_name='mood',
            name='mission',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='mission.completedmission'),
        ),
    ]