# Generated by Django 3.1 on 2020-08-14 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_auto_20200814_2153'),
    ]

    operations = [
        migrations.AddField(
            model_name='historicalvideo',
            name='status',
            field=models.CharField(choices=[('UPL', 'Uploading'), ('PRO', 'Processing'), ('REA', 'Ready')], default='UPL', max_length=3),
        ),
        migrations.AddField(
            model_name='video',
            name='status',
            field=models.CharField(choices=[('UPL', 'Uploading'), ('PRO', 'Processing'), ('REA', 'Ready')], default='UPL', max_length=3),
        ),
    ]