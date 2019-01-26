import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    el = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Contact Page'`, async(() => {
    expect(component.text).toEqual('Contact Page');
  }));

  it(`should set submit to true`, async(() => {
    component.onSubmit();
    expect(component.submited).toBeTruthy();
  }));

  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    const ma = debugElement.query(By.css('button')).nativeElement;
    ma.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it(`form should be invalid`, async(() => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it(`form should e valid`, async(() => {
    component.contactForm.controls['name'].setValue('Andre bastos');
    component.contactForm.controls['email'].setValue(
      'andre.bastos@najareal.com'
    );
    component.contactForm.controls['text'].setValue(
      'This is a very andfull request'
    );
    expect(component.contactForm.valid).toBeTruthy();
  }));
});
