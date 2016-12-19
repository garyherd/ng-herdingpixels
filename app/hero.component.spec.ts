import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { TestModuleSetting } from './testing-module-model';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeroComponent', function () {
  let de: DebugElement;
  let comp: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule(TestModuleSetting).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('header'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  // it('should have expected <h1> text', () => {
  //   fixture.detectChanges();
  //   const h1 = de.nativeElement;
  //   expect(h1.innerText).toMatch(/angular/i,
  //     '<h1> should say something about "Angular"');
  // });

});