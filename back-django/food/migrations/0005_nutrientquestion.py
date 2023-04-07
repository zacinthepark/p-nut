# Generated by Django 3.2.18 on 2023-04-03 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0004_nutrientrec'),
    ]

    operations = [
        migrations.CreateModel(
            name='NutrientQuestion',
            fields=[
                ('nut_quest_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('nutrient_id', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'nutrient_question',
                'managed': False,
            },
        ),
    ]
