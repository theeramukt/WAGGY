# Generated by Django 5.0.4 on 2024-04-30 03:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order_management', '0003_remove_order_product_order_description_order_image_and_more'),
        ('user_management', '0003_remove_customeraddress_customer_customeraddress_city_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Checkout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=255)),
                ('phone', models.PositiveBigIntegerField()),
                ('city', models.CharField(max_length=255)),
                ('postalCode', models.PositiveIntegerField()),
                ('customer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user_management.customer')),
                ('order', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='order_management.order')),
            ],
        ),
    ]
