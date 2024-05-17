import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroLoadingMicroComponent } from './erro-loading-micro.component';

describe('ErroLoadingMicroComponent', () => {
  let component: ErroLoadingMicroComponent;
  let fixture: ComponentFixture<ErroLoadingMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErroLoadingMicroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErroLoadingMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
