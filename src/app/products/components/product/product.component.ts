import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() data!: Product
  @Output() item = new EventEmitter()
  addButton: boolean = false;
  amount: number = 0;
  loading: boolean = false;


  constructor(private _service: ProductsService) {

  }
  ngOnInit(): void {
    

  }
  add() {
    this.item.emit({ item: this.data, quantity: this.amount })
  }
}
