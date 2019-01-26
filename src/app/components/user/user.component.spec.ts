import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { UserService } from '../../services/user.service';
import { UserMockService } from '../../mocks/services/user-mock.service';
import { from } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [{ provide: UserService, useClass: UserMockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have one user`, async(() => {
    expect(component.users.length).toEqual(1);
  }));

  it(`html should render one user`, async(() => {
    const el = fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('user1');
  }));
});
