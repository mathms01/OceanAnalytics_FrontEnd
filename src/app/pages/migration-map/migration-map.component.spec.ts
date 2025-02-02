import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationMapComponent } from './migration-map.component';

describe('MigrationMapComponent', () => {
  let component: MigrationMapComponent;
  let fixture: ComponentFixture<MigrationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MigrationMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
