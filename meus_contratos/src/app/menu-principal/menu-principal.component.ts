import { Component,ElementRef,EventEmitter,Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {

  @Input('titulo') titulo:string = "";
  @Output('busca') realizaBusca = new EventEmitter();

  @ViewChild('valorParaBusca') valorParaBusca: ElementRef;

  executaBusca():void{

    let busca = this.valorParaBusca.nativeElement.value;

    this.realizaBusca.emit(busca);

    this.valorParaBusca.nativeElement.value = '';
  }

}
