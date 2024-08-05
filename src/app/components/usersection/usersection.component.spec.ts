import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersectionComponent } from './usersection.component';

describe('UsersectionComponent', () => {
  let component: UsersectionComponent;
  let fixture: ComponentFixture<UsersectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
