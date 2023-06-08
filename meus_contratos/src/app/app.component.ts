import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meus_contratos';

  realizaBusca(busca:string):void{

    console.log(`realiza busca pelo valor ${busca}`);
  }
}
