# Generated by Django 5.0.4 on 2024-04-27 06:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order_management', '0008_remove_order_product'),
        ('product_management', '0003_category_remove_product_category_product_category'),
        ('user_management', '0002_customer_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='product_management.product'),
        ),
        migrations.AlterField(
            model_name='order',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='user_management.customer'),
        ),
    ]
