import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  addToCart(product) {
    // @ts-ignore
    this.items.push(product);
  }

  // tslint:disable-next-line:typedef
  getItems() {
    return this.items;
  }

  // tslint:disable-next-line:typedef
  clearCart() {
    this.items = [];
    return this.items;
  }

  // tslint:disable-next-line:typedef
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
