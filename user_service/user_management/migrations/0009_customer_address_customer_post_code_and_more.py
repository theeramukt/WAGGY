# Generated by Django 5.0.4 on 2024-04-25 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_management', '0008_remove_customer_address_remove_customer_post_code_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='address',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='customer',
            name='post_code',
            field=models.CharField(blank=True, max_length=5),
        ),
        migrations.AddField(
            model_name='customer',
            name='province',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='customer',
            name='tel',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
