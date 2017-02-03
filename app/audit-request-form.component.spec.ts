import { AppComponent } from './app.component';
import { AuditRequestFormComponent } from './audit-request-form.component';
import { TestModuleSetting } from './testing-module-model';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AuditRequestForm', function () {
  let de: DebugElement;
  let comp: AuditRequestFormComponent;
  let fixture: ComponentFixture<AuditRequestFormComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule(TestModuleSetting).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditRequestFormComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('header'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

});