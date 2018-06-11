from django.contrib import admin
from .models import Profile
# Register your models here.

class AccountAdmin(admin.ModelAdmin):
    """
    Custom View of Accounts
    """

    list_display = ("user", "location", "title", "github", "donator", )

    list_filter = ("donator", )

    search_fields = ("firstName", "lastName", "github", )

    ordering = ["-user__username"]


admin.site.register(Profile, AccountAdmin)
