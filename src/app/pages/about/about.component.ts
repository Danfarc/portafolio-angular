import { Component } from '@angular/core';
import { EquipoService } from 'src/app/services/equipo.service';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public _servicio : EquipoService){

  }

}
