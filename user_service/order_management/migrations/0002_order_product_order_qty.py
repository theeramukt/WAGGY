# Generated by Django 5.0.4 on 2024-04-28 22:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order_management', '0001_initial'),
        ('product_management', '0002_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='product_management.product'),
        ),
        migrations.AddField(
            model_name='order',
            name='qty',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
