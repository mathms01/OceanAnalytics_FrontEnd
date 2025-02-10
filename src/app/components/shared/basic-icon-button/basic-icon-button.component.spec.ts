import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIconButtonComponent } from './basic-icon-button.component';

describe('BasicIconButtonComponent', () => {
  let component: BasicIconButtonComponent;
  let fixture: ComponentFixture<BasicIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicIconButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
