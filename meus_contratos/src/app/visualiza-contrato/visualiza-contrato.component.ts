import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualiza-contrato',
  templateUrl: './visualiza-contrato.component.html',
  styleUrls: ['./visualiza-contrato.component.css']
})
export class VisualizaContratoComponent {

  codigo:string = ""
  constructor(private route: ActivatedRoute){

    this.route.params.subscribe(params => {

      this.codigo = params['codigo'];
    });
  }

}
