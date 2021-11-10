import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsListItemComponent } from './pets-list-item.component';

describe('PetsListItemComponent', () => {
  let component: PetsListItemComponent;
  let fixture: ComponentFixture<PetsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
