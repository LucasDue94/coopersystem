import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-sucesso',
  templateUrl: './modal-sucesso.component.html',
  styleUrls: ['./modal-sucesso.component.scss']
})
export class ModalSucessoComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
