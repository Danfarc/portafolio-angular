import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducto } from '../Interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  producto:IProducto[]=[];

  cargando:boolean = true;

  constructor(private http:HttpClient) {
    this.cargaProductos_idx();
  }



  private cargaProductos_idx(){
    this.http.get<IProducto[]>("https://angular-html-f0180-default-rtdb.firebaseio.com/productos_idx.json")
    .subscribe(( resp: IProducto[] ) => {
      this.producto =resp;
      console.log(resp);

      setTimeout(() => {
        this.cargando = false;
      }, 1000);

    });
  }
}



