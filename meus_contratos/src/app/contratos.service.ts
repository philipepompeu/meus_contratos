import { Injectable } from '@angular/core';
import { Contrato } from './contrato';

const STORAGE_ID = 'contratos-list';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  static contratosRepository:Contrato[] = [];

  constructor() {
    let lista = localStorage.getItem(STORAGE_ID);

    if (lista != null) {
      ContratosService.contratosRepository = JSON.parse(lista);
    }

  }


  getAllContracts():Contrato[]{
    return ContratosService.contratosRepository;
  }

  getContractById(id:string):Contrato|undefined{

    return ContratosService.contratosRepository.find(e => e.codigo == id);

  }

  saveNewContract(umContrato: Contrato):void{

    ContratosService.contratosRepository.push(umContrato);
    localStorage.removeItem(STORAGE_ID);
    localStorage.setItem(STORAGE_ID,JSON.stringify(ContratosService.contratosRepository));

  }
}
