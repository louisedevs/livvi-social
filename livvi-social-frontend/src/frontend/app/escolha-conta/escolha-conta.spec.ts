import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaConta } from './escolha-conta';

describe('EscolhaConta', () => {
  let component: EscolhaConta;
  let fixture: ComponentFixture<EscolhaConta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscolhaConta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhaConta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
