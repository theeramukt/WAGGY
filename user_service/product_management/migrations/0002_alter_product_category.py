# Generated by Django 5.0.4 on 2024-04-25 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_management', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('Dog', 'Dog'), ('Cat', 'Cat')], max_length=255),
        ),
    ]
