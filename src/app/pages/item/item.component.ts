import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { IProductoDesc } from '../../Interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  productoDesc: IProductoDesc = {};
  id?:string = "";

  constructor(private route: ActivatedRoute,
              public _productoService: ProductosService ){
  }

  ngOnInit(){
    this.route.params
    .subscribe(parametros =>{
      //console.log(parametros['id'])
      this._productoService.getProducto(parametros['id'])
        .subscribe( (producto: IProductoDesc) => {
          this.id = parametros['id'];
          this.productoDesc = producto;
        });
    });
  }
}
