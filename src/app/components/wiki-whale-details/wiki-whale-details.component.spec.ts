import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiWhaleDetailsComponent } from './wiki-whale-details.component';

describe('WikiWhaleDetailsComponent', () => {
  let component: WikiWhaleDetailsComponent;
  let fixture: ComponentFixture<WikiWhaleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WikiWhaleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WikiWhaleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
