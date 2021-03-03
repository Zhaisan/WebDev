import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = categories;

  constructor() { }

  ngOnInit(): void {
  }

}
