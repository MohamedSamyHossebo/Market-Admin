import { environment } from './../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }
  getAllProducts() {
    return this._httpClient.get(environment.baseApi + 'products')
  }
  getAllCategories() {
    return this._httpClient.get(environment.baseApi + 'products/categories')
  }
  getProductsByCategory(keyword: string) {
    return this._httpClient.get(environment.baseApi + 'products/category/' + keyword)
  }
  getProductById(id: any) {
    return this._httpClient.get(environment.baseApi + 'products/' + id)
  }
  createProduct(model:any) {
    return this._httpClient.post(environment.baseApi +'products' , model)
  }

}