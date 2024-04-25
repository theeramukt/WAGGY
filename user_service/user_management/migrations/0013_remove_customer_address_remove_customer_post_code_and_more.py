# Generated by Django 5.0.4 on 2024-04-25 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_management', '0012_remove_customer_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='address',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='post_code',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='province',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='tel',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='user',
        ),
        migrations.AddField(
            model_name='customer',
            name='email',
            field=models.EmailField(default='b@gmail.com', max_length=254, unique=True),
            preserve_default=False,
        ),
    ]