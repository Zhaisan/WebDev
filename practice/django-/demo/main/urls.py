from django.urls import path, re_path
from main.views import hello, show_time, product_list, product_detail

urlpatterns = [
    path('hi/', hello),
    re_path('time/plus/(\d{1,2})/', show_time), #d means digits, +means number of digits
    path('products/', product_list ),
    path('products/<int:product_id>/', product_detail)
]