import { Component, OnInit } from '@angular/core';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-personal-accidents',
  templateUrl: './personal-accidents.component.html',
  styleUrls: ['./personal-accidents.component.scss']
})
export class PersonalAccidentsComponent implements OnInit {

  constructor(private metaTags: MetatagsService) { }

  ngOnInit(): void {
    this.metaTags.setMetaTags('Cotización de Seguro Accidentes Personales | Seguros Bolívar','Realice la cotización de su seguro de accidentes personales en viaje. Cuide a los que más quiere con un apoyo económico en caso de fallecimiento accidental');
  }

}
