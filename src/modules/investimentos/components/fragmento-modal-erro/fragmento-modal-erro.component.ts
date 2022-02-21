import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
