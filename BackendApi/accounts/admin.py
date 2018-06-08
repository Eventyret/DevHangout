from django.contrib import admin
from .models import Profile
# Register your models here.


class AccountAdmin(admin.ModelAdmin):
    """
    Custom View of Accounts
    """

    list_display = ("user","email", "location", "title", "github", "donator", )

    list_filter = ("donator", )

    search_fields = ("email", "firstName", "lastName", "github", )

    ordering = ["-user__username"]


admin.site.register(Profile, AccountAdmin)
