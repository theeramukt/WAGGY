# Generated by Django 5.0.4 on 2024-04-30 08:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order_management', '0005_remove_checkout_order_checkout_email_checkout_price_and_more'),
        ('user_management', '0003_remove_customeraddress_customer_customeraddress_city_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='checkout',
            old_name='address',
            new_name='image',
        ),
        migrations.RemoveField(
            model_name='checkout',
            name='city',
        ),
        migrations.RemoveField(
            model_name='checkout',
            name='customer',
        ),
        migrations.RemoveField(
            model_name='checkout',
            name='email',
        ),
        migrations.RemoveField(
            model_name='checkout',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='checkout',
            name='postalCode',
        ),
        migrations.AddField(
            model_name='checkout',
            name='description',
            field=models.CharField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='checkout',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user_management.customer'),
        ),
    ]
