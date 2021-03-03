import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
// import { categories } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products = products;
  products: any;
  constructor(private route: ActivatedRoute){}

  
  share() {
    window.alert('The product has been shared!');
  }

  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  remove(product: any){
    product.show = false;
  }

  pressLike(product: any){
    if(product.isLiked){
      product.likes += 1;
      product.isLiked = false;
    }
    else{
      product.likes -= 1;
      product.isLiked = true;
    }
  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const categoryNameFromRoute = String(routeParams.get('categoryName'));
    this.products = products.filter(i => i.category == categoryNameFromRoute);
  }
}

