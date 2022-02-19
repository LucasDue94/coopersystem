import { Component, OnInit, ViewChild } from '@angular/core';
import { faChartLine, faDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Investimento } from '../../../models/investimento';
import { Acao } from '../../../models/acao';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.scss']
})
export class ResgateComponent implements OnInit {
  @ViewChild('modalResgate') modalResgate = undefined;
  @ViewChild('modalErro') modalErro = undefined;
  faUser = faUser;
  charLine = faChartLine;
  faDollar = faDollar;
  investimento: Investimento = {
    nome: '',
    objetivo: '',
    saldoTotal: 0,
    indicadorCarencia: '',
    acoes: []
  };
  sum = 0;
  totalResgatado = 0;
  submit = false;

  form: FormGroup = this.fb.group({
    acoes: this.fb.array([])
  });

  constructor(private router: Router, private fb: FormBuilder,
              private modalService: NgbModal) {
  }

  get acoesControlArray() {
    return this.form.controls['acoes'] as FormArray;
  }

  ngOnInit(): void {
    this.investimento = history.state?.data;
    if (!this.investimento) this.router.navigate(['investimentos']);
    this.inicializaForm();
  }

  inicializaForm = () => this.investimento?.acoes.forEach((acao: Acao) => this.addControl(acao));

  calculaSaldo(percentage: number) {
    const saldoAcumulado = this.investimento?.saldoTotal * (percentage / 100);
    this.sum += Number(saldoAcumulado.toFixed(2));
    return Number(saldoAcumulado.toFixed(2));
  }

  converteStringParaNumber = (valor: string): number => valor ? Number(valor.replace(',', '.')) : 0;

  validacaoForm(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const resgateValido = control.value.saldoAcumulado >= this.converteStringParaNumber(control.value.valorResgate);
      const error = `O valor a resgatar não pode ser maior que R$ ${control.value.saldoAcumulado}`;
      return !resgateValido ? { resgateInvalido: { value: error } } : null;
    };
  }

  addControl(acao: Acao) {
    const group = this.fb.group({
      id: [acao.id],
      nome: [acao.nome],
      saldoAcumulado: [this.calculaSaldo(acao.percentual)],
      valorResgate: [null]
    }, { validators: [this.validacaoForm()] });

    this.acoesControlArray.push(group);
  }

  castParaGroup = (acao: AbstractControl) => acao as FormGroup;

  cancelar = () => this.router.navigate(['investimentos']);

  confirmarResgate() {
    console.log(this.acoesControlArray);
    this.submit = true;

    if (this.acoesControlArray.valid && this.acoesControlArray.dirty) {
      this.abrirModalSucesso();
      this.subtraiSaldo();
      this.submit = false;
    } else if (this.acoesControlArray.invalid) {
      this.abrirModalErro();
    }

  }

  subtraiSaldo() {
    this.acoesControlArray.controls.forEach(abstractControl => {
      const group = abstractControl as FormGroup;
      const { valorResgate, saldoAcumulado } = group.value;
      const valorResgatadoConvertido = this.converteStringParaNumber(valorResgate);
      if (valorResgatadoConvertido <= saldoAcumulado) {
        console.log(group);
        group.controls['saldoAcumulado'].setValue(saldoAcumulado - valorResgatadoConvertido);
        this.investimento.saldoTotal -= valorResgatadoConvertido;
        this.totalResgatado += valorResgatadoConvertido;
      }
    });
  }

  abrirModalSucesso = () => this.modalService.open(this.modalResgate, { centered: true });
  abrirModalErro = () => this.modalService.open(this.modalErro, { size: 'lg', centered: true });
}
