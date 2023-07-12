import { environment } from './../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) { }

  getAllCarts(param?: any) {
    let params = new HttpParams()
    params = params.append('startDate', param?.start).append('endDate', param?.end)
    return this._http.get(environment.baseApi + 'carts', { params })

  }
  deleteCart(id: number) {
    return this._http.delete(environment.baseApi + 'carts/' + id)
  }
}
