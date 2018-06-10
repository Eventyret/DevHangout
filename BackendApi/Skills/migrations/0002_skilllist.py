# Generated by Django 2.0.5 on 2018-06-10 09:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Skills', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SkillList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('displayName', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name_plural': 'Skill List',
            },
        ),
    ]
