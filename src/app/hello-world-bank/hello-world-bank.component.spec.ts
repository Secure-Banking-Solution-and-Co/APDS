import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldBankComponent } from './hello-world-bank.component';

describe('HelloWorldBankComponent', () => {
  let component: HelloWorldBankComponent;
  let fixture: ComponentFixture<HelloWorldBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorldBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
