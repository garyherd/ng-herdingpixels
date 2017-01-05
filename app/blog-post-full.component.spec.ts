import { AppComponent } from './app.component';
import { BlogPostFullComponent } from './blog-post-full.component';
import { TestModuleSetting } from './testing-module-model';
import { POSTS } from './mock-posts'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('BlogFullComponent', function () {
  let de: DebugElement;
  let comp: BlogPostFullComponent;
  let fixture: ComponentFixture<BlogPostFullComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule(TestModuleSetting).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostFullComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('header'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

});