import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrato } from './contrato';
import { Observable } from 'rxjs';

const STORAGE_ID = 'contratos-list';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {

  static contratosRepository:Contrato[] = [];

  static urlEndPoint = 'http://localhost:3000/contratos';

  constructor(private http: HttpClient) {
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

  saveNewContract(umContrato: Contrato):Observable<Contrato>{

    ContratosService.contratosRepository.push(umContrato);
    localStorage.removeItem(STORAGE_ID);
    localStorage.setItem(STORAGE_ID,JSON.stringify(ContratosService.contratosRepository));

    return this.http.post<Contrato>(ContratosService.urlEndPoint, umContrato);

  }
}
