import { Contrato } from './../contrato';
import { Component, Input, OnInit } from '@angular/core';
import { ContratosService } from '../contratos.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-contrato',
  templateUrl: './formulario-contrato.component.html',
  styleUrls: ['./formulario-contrato.component.css']
})
export class FormularioContratoComponent implements OnInit {

  @Input('onlyView')onlyView:boolean = false;
  @Input('contrato')contrato:Contrato;

  contratoForm:FormGroup;

  constructor(private contratosService: ContratosService,
              private formBuilder: FormBuilder,
              private router: Router){

  }

  ngOnInit(): void {

    let validData = [Validators.required,Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)];
    let validNumero = [Validators.pattern(/^[0-9]+$/)];

    let validCodigo = [ Validators.required,
                                Validators.minLength(4),
                                Validators.maxLength(10),
                                Validators.pattern(/^[A-Za-z0-9]*$/)];
    let validCliente = [ Validators.required,
                                Validators.minLength(4),
                                Validators.maxLength(15)];


    this.contratoForm = this.formBuilder.group({
                          codigo : ['',Validators.compose(validCodigo)],
                          dataInicio: ['',Validators.compose(validData)],
                          dataFinal: ['',Validators.compose(validData)],
                          cliente : ['',Validators.compose(validCliente)],
                          valor : [0,Validators.compose(validNumero)],
                          saldo : [0,Validators.compose(validNumero)]
                        });
  }

  onSubmit() {




    if (this.contratoForm.valid) {

      let novoContrato:Contrato = this.criaContrato();

      console.log(novoContrato);

      this.contratosService.saveNewContract(novoContrato);

      this.router.navigate(['/']);
    }else{
      console.log('fail to submit');
    }
  }
  criaContrato(): Contrato {


    return {
      codigo: this.contratoForm.get('codigo')?.getRawValue(),
      dataInicio:this.contratoForm.get('dataInicio')?.getRawValue(),
      dataFinal:this.contratoForm.get('dataFinal')?.getRawValue(),
      cliente: this.contratoForm.get('cliente')?.getRawValue(),
      valor: parseFloat(this.contratoForm.get('valor')?.getRawValue()),
      saldo: parseFloat(this.contratoForm.get('saldo')?.getRawValue())
    };
  }

  getClassByFormState(campo:string){

    if (this.onlyView) {
      return '';
    }

    if (this.pegaMensagemDeErro(campo).length > 0) {
      return 'is-invalid';
    }else{
      return 'is-valid';
    }
  }

  pegaMensagemDeErro(campo: string):string{
    let mensagemDeErro = '';
    if (this.contratoForm.get(campo)?.errors) {
      let listaDeErro = this.contratoForm.get(campo)?.errors as ValidationErrors;

      if (listaDeErro) {
        Object.keys(listaDeErro).every(keyError=>{

          if (keyError == 'required') {
            mensagemDeErro = `${campo} é obrigatório.`;
            return false;
          }else if(keyError == 'pattern'){
            mensagemDeErro = `${campo} não atende aos critérios de preenchimento.`;
            return false;
          }else if(keyError == 'minlength'){
            mensagemDeErro = `${campo} não atende ao tamanho minimo.`;
            return false;
          }else if(keyError == 'maxlength'){
            mensagemDeErro = `${campo} não atende ao tamanho máximo.`;
            return false;
          }
          console.log(keyError);


          return true;
        })
      }
    }

    return mensagemDeErro;
  }

  exibeMensagemDeErro(campo:string): boolean{

    return  this.contratoForm.get(campo)?.errors != null &&
            this.contratoForm.get(campo)?.touched == true;
  }
}
