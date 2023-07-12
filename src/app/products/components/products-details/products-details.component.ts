import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  id: any
  data: any = {}
  loading: boolean = false
  constructor(private _route: ActivatedRoute, private _service: ProductsService) {
    this.id = this._route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.loading = true
    this._service.getProductById(this.id).subscribe(res => {
      this.loading = false
      this.data = res
    })
  }

}
