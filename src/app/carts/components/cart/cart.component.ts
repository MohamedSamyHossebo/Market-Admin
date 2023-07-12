import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private _service: CartService, private _fp: FormBuilder, private _proudctService: ProductsService) {

  }
  products: any[] = []
  carts: any[] = []
  form!: FormGroup
  details: any

  ngOnInit() {

    this.form = this._fp.group({
      start: ["", [Validators.required]],
      end: ["", [Validators.required]]
    })


  }
  applyForm() {
    let date = this.form.value
    this._service.getAllCarts(date).subscribe((res: any) => {
      this.carts = res
    })
  }
  getAllCarts() {
    this._service.getAllCarts().subscribe((res: any) => {
      this.carts = res
    })
  }
  deleteCart(id: number) {
    this._service.deleteCart(id).subscribe((res: any) => {
      this._service.getAllCarts()
      alert("cart Deleted")
    })
  }

  view(index: number) {
    this.products = []
    this.details = this.carts[index]
    for (let x in this.details.products) {
      this._proudctService.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({ item: res, quantity: this.details.products[x].quantity })
      })
    }
  }
} 
