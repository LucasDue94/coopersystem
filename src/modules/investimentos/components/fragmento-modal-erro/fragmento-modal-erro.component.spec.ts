import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentoModalErroComponent } from './fragmento-modal-erro.component';

describe('FragmentoModalErroComponent', () => {
  let component: FragmentoModalErroComponent;
  let fixture: ComponentFixture<FragmentoModalErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentoModalErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentoModalErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
