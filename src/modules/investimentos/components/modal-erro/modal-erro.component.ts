import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-erro',
  templateUrl: './modal-erro.component.html',
  styleUrls: ['./modal-erro.component.scss']
})
export class ModalErroComponent implements OnInit {
  @Input() controls: FormGroup[] = [];
  @Input() closeModal = ()=>{};
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }


}
