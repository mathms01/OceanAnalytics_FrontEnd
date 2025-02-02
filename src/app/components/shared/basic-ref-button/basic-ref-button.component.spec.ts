import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRefButtonComponent } from './basic-ref-button.component';

describe('BasicRefButtonComponent', () => {
  let component: BasicRefButtonComponent;
  let fixture: ComponentFixture<BasicRefButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicRefButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicRefButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
