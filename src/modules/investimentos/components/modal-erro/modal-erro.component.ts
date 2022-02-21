import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-erro',
  templateUrl: './modal-erro.component.html',
  styleUrls: ['./modal-erro.component.scss']
})
export class ModalErroComponent {
  @Input() controls: FormGroup[] = [];
  @Input() closeModal = ()=>{};
  constructor(public activeModal: NgbActiveModal) {
  }

}
