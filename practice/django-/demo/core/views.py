from django.http.response import JsonResponse
from core.models import Product

def product_list(request):
    # SELECT * FROM core_product;
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    print(products_json)
    return JsonResponse(products_json, safe=False) #we make safe=false if we send something that is not dict

def product_detail(request, product_id):
    #SELECT * FROM core_product WHERE id = <product_id>;
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(product.to_json())

    # for product in products:
    #     if product['id'] == product_id:
    #         return JsonResponse(product, status=200)
    # return JsonResponse({'message': 'Product not found with selected ID'}, status=400)
    #return HttpResponse(f"<h1>Product detail page: {product_id}</h1>")