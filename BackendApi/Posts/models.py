from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Posts(models.Model):
    """ Posts that users can make holding the fields for their database"""
    content = models.TextField(null=True, blank=True)
    date = models.DateField(auto_now=False, auto_now_add=False)
    profileID = models.ForeignKey("accounts.Profile", on_delete=models.CASCADE)


class PostLikes(models.Model):
    userID = models.OneToOneField(User, on_delete=models.CASCADE)
    postID = models.OneToOneField(Posts, on_delete=models.CASCADE)


class PostDislikes(models.Model):
    userID = models.OneToOneField(User, on_delete=models.CASCADE)
    postID = models.OneToOneField(Posts, on_delete=models.CASCADE)


class Comments(models.Model):
    content = models.TextField(null=True, blank=True)
    date = models.DateField(auto_now=False, auto_now_add=False)
    postID = models.ForeignKey("Posts", on_delete=models.CASCADE)


class CommentLikes(models.Model):
    userID = models.OneToOneField(User, on_delete=models.CASCADE)
    commentID = models.OneToOneField(Comments, on_delete=models.CASCADE)


class CommentDislikes(models.Model):
    userID = models.OneToOneField(User, on_delete=models.CASCADE)
    commentID = models.OneToOneField(Comments, on_delete=models.CASCADE)
