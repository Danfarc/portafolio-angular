import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEquipo } from '../Interfaces/equipo-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:IEquipo[]=[];

  constructor( private http: HttpClient) {

    this.cargarEquipo();
  }

  private cargarEquipo(){
    this.http.get<IEquipo[]>('https://angular-html-f0180-default-rtdb.firebaseio.com/Equipo.json')
    .subscribe((resp:IEquipo[]) =>{
      this.equipo = resp;
    });
  }
}
