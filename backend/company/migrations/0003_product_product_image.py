# Generated by Django 4.2.7 on 2024-01-16 12:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_driver_product_company_description_resource'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_image',
            field=models.ImageField(default='default.jpg', upload_to='media_file'),
        ),
    ]