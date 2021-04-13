from django.db import models

# 1) OneToOne relation - (for each USER, we have only one PROFILE)
# 2) OneToMany relation - (each CATEGORY will have number of PRODUCT)
# 3) ManyToMany relation - (PRODUCT and TAG)

# class Tag(models.Model):
#     name = models.CharField(max_length=100)
#
# class ProductTag(models.Model):
#     tag = models.ForeignKey(Tag)
#     product = models.ForeignKey(Product)


class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def __str__(self):
        return f'{self.id}: {self.name}'

class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    #tags = models.ManyToManyField(Tag)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'{self.id}: {self.name} | {self.price}'


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }

