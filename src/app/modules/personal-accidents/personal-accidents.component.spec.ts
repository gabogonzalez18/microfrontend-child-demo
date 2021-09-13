import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAccidentsComponent } from './personal-accidents.component';

describe('PersonalAccidentsComponent', () => {
  let component: PersonalAccidentsComponent;
  let fixture: ComponentFixture<PersonalAccidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAccidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAccidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
