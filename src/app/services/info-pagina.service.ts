import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../Interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  cargada:boolean = false;

  equipo:any[]  = [];

  constructor(private http: HttpClient) {
    //console.log('Servicio de infoPagina Listo');

    // Leer el archivo JSON
    /* this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      //console.log(resp);
      //console.log( resp.email);
    }); */
    this.cargarInfo();

  }

  private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      //console.log(resp);
    });
  }


}
