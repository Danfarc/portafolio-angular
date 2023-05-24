import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducto, IProductoDesc } from '../Interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  producto:IProducto[]=[];
  productoDesc:IProductoDesc={};
  productoFiltrado: IProducto[]=[];

  cargando:boolean = true;

  constructor(private http:HttpClient) {
    this.cargaProductos_idx();
  }



  private cargaProductos_idx(){

    return new Promise<void>((resolve, reject)=>{

      this.http.get<IProducto[]>("https://angular-html-f0180-default-rtdb.firebaseio.com/productos_idx.json")
      .subscribe(( resp: IProducto[] ) => {
        this.producto =resp;
        //console.log(resp);

        setTimeout(() => {
          this.cargando = false;
        }, 1000);

        resolve();
      });

    });
  }

  getProducto(id:string){
    return this.http.get<IProductoDesc>(`https://angular-html-f0180-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string){

    if(this.producto.length === 0){
        //Cargar productos
        this.cargaProductos_idx().then(()=>{
          // ejecutar despues de tener los productos
          // Aplicar filtro
          this.filtrarProductos(termino)

        });
    }else{
        // Aplicar filtro
        this.filtrarProductos(termino)
    }

  }

  private filtrarProductos(termino:string){

    // this.productoFiltrado = this.producto.filter( producto =>{
    //   return true;
    // });

    this.productoFiltrado =[];

    termino = termino.toLocaleLowerCase();

    this.producto.forEach( prod =>{

      const titulo = prod.titulo?.toLocaleLowerCase();

      if( prod.categoria!.indexOf( termino ) >=0 || titulo!.indexOf( termino ) >=0){
        this.productoFiltrado.push(prod);
      }

    });

    //console.log(this.productoFiltrado);
  }

}



