# Generated by Django 5.0.4 on 2024-04-28 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_management', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='product_images'),
        ),
    ]
