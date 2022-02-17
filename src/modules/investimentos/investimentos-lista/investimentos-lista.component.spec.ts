import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentosListaComponent } from './investimentos-lista.component';

describe('InvestimentosListaComponent', () => {
  let component: InvestimentosListaComponent;
  let fixture: ComponentFixture<InvestimentosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestimentosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
