from django.contrib import admin
from authentication.models import Account 
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from .models import Make_Resume , Apply
from . import models
from import_export.admin import ImportExportModelAdmin

# from .models import file_upload

# Register your models here.

@admin.register(Account)
class Acc (ImportExportModelAdmin):
  pass

admin.site.register(Make_Resume)
@admin.register(Apply)
class App(ImportExportModelAdmin):
  pass