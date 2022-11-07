import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCompanyComponent } from './save-company.component';

describe('SaveCompanyComponent', () => {
  let component: SaveCompanyComponent;
  let fixture: ComponentFixture<SaveCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
