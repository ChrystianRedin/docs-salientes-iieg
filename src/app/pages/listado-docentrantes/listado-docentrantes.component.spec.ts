import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDocentrantesComponent } from './listado-docentrantes.component';

describe('ListadoDocentrantesComponent', () => {
  let component: ListadoDocentrantesComponent;
  let fixture: ComponentFixture<ListadoDocentrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDocentrantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDocentrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
