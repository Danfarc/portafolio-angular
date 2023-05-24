import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../Interfaces/info-pagina.interface';
import { Equipo } from '../Interfaces/equipo-pagina.interface';

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
    this.cargarEquipo();

  }

  private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      //console.log(resp);
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-f0180-default-rtdb.firebaseio.com/Equipo.json')
    .subscribe((resp: any) => {
      this.cargada = true;
      this.equipo = resp;
      //console.log(resp);
    });
  }

}
