import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDateComponent } from './add-date.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddDateComponent', () => {
  let component: AddDateComponent;
  let fixture: ComponentFixture<AddDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [AddDateComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud inizilize form without values', () => {
    expect(component.formDate.get('name')?.value).toEqual('');
  });

  it('input shoud save data properly', () => {
    const rita = 'Rita';
    const input = fixture.nativeElement.querySelector('input');
    input.value = rita;

    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.formDate.get('name')?.value).toEqual('Rita');
  });
});
