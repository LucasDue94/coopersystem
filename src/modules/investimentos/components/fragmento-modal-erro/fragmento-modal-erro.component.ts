import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fragmento-modal-erro',
  templateUrl: './fragmento-modal-erro.component.html',
  styleUrls: ['./fragmento-modal-erro.component.scss']
})
export class FragmentoModalErroComponent {
  @Input() controls: FormGroup[] = [];

  constructor() {
  }

}
