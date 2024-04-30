# Generated by Django 5.0.4 on 2024-04-29 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_management', '0002_remove_customer_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customeraddress',
            name='customer',
        ),
        migrations.AddField(
            model_name='customeraddress',
            name='city',
            field=models.CharField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customeraddress',
            name='customerName',
            field=models.CharField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customeraddress',
            name='email',
            field=models.EmailField(default=1, max_length=254),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='customeraddress',
            name='postalCode',
            field=models.PositiveIntegerField(default=1),
            preserve_default=False,
        ),
    ]
