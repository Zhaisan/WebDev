from django.contrib import admin
from core.models import Product, Category

# Register your models here.

# admin.site.register(Product)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'description', 'category',)
    search_fields = ('name', 'price',)
    list_filter = ('category',)

admin.site.register(Category)



