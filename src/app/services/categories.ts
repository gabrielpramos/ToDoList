import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../model/category-model';
import { IItemsList } from '../model/items-list-model';

@Injectable()
export class CategoriesService {
    BASE_URL: string = 'https://5cfa67ebf26e8c00146d0756.mockapi.io/categories';
    BASE_OPTIONS: Object = {
        headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        }),
    }
    constructor(private _http: HttpClient) {
    }

    getAll(): Observable<ICategory[]> {
        return this._http.get<ICategory[]>(this.BASE_URL, this.BASE_OPTIONS);
    }

    getLists(idCategory: number): Observable<IItemsList[]> {
        return this._http.get<IItemsList[]>(`${this.BASE_URL}:${idCategory}/lists`, this.BASE_OPTIONS);
    }
}