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


    /*ContratosService.contratosRepository.forEach(contrato => {
      this.postContract(contrato).subscribe({
        next: (valor)=>{

        },
        error: (e)=> console.log(e),
        complete: ()=> console.log('requisicao finalizada')
      });
    });*/


  }


  private getListaFromLocalStorage():void{
    let lista = localStorage.getItem(STORAGE_ID);
    if (lista != null) {
      ContratosService.contratosRepository = JSON.parse(lista);
    }
  }

  getAllContracts():Observable<Contrato[]>{

    return this.http.get<Contrato[]>(ContratosService.urlEndPoint)
    //return ContratosService.contratosRepository;
  }

  getContractById(id:string):Observable<Contrato>{



    return this.http.get<Contrato>(`${ContratosService.urlEndPoint}/${id}`);
    //return ContratosService.contratosRepository.find(e => e.codigo == id);

  }

  saveNewContract(umContrato: Contrato):Observable<Contrato>{

    ContratosService.contratosRepository.push(umContrato);
    localStorage.removeItem(STORAGE_ID);
    localStorage.setItem(STORAGE_ID,JSON.stringify(ContratosService.contratosRepository));

    return this.postContract(umContrato);

  }


  private postContract(umContrato: Contrato):Observable<Contrato>{

    return this.http.post<Contrato>(ContratosService.urlEndPoint, umContrato);
  }
}
