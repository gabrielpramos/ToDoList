import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories';
import { ICategory } from '../model/category-model';
import { IItemsList } from '../model/items-list-model';

@Component({
  selector: 'app-category-detail-list',
  templateUrl: './category-detail-list.component.html',
  styleUrls: ['./category-detail-list.component.css', '../categories-list/categories-list.component.css']
})
export class CategoryDetailListComponent implements OnInit {

  category: ICategory = { id: undefined, name: '' };
  itemsLists: IItemsList[];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _categoriesServices: CategoriesService
  ) { }

  ngOnInit() {
    this.evalCategory();
    this.loadCategoryLists();
  }

  evalCategory() {
    this._activatedRoute.params.forEach((parameter) => {
      this.category.id = parseInt(parameter.categoryid, 10);
    });
  }
  loadCategoryLists() {
    this._categoriesServices.getLists(this.category.id).subscribe((itemsLists) => {
      this.itemsLists = itemsLists;
    });
  }

}
