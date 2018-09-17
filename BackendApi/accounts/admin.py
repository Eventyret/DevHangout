from django.contrib import admin
from .models import Profile, Education, Experience
# Register your models here.

class AccountAdmin(admin.ModelAdmin):
    """Custom View of Accounts"""

    list_display = ("user", "get_user_email", "location", "title", "github", "donator")

    list_filter = ("donator", )

    search_fields = ("firstName", "lastName", "github", )

    ordering = ["-user__username"]
    def get_user_email(self, instance):
        return instance.user.email
    get_user_email.short_description = 'User Email'



admin.site.register(Profile, AccountAdmin)
admin.site.register(Education)
admin.site.register(Experience)
