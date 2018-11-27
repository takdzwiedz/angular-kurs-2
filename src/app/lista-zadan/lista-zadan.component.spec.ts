import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZadanComponent } from './lista-zadan.component';

describe('ListaZadanComponent', () => {
  let component: ListaZadanComponent;
  let fixture: ComponentFixture<ListaZadanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaZadanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZadanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
