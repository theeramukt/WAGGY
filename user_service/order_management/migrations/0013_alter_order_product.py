# Generated by Django 5.0.4 on 2024-04-27 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order_management', '0012_order_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='product',
            field=models.CharField(default='Dog Bed', max_length=255),
            preserve_default=False,
        ),
    ]