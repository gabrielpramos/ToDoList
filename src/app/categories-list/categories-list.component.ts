import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../services/categories';
import { ICategory } from '../model/category-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: ICategory[];

  constructor(
    private _router: Router,
    private _categoriesServices: CategoriesService,
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {

    this._categoriesServices.getAll().subscribe((categories: ICategory[]) => {
      this.categories = categories;
    });
  }

  openList(category: ICategory) {
    this._router.navigate(['/category-detail-list', category.id]);
  }
}
