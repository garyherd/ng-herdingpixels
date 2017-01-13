import { AppComponent } from './app.component';
import { BlogPostCommentsComponent } from './blog-post-comments.component';
import { TestModuleSetting } from './testing-module-model';
import { POSTS } from './mock-posts'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('BlogPostComments', function () {
  let de: DebugElement;
  let comp: BlogPostCommentsComponent;
  let fixture: ComponentFixture<BlogPostCommentsComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule(TestModuleSetting).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostCommentsComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('header'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

});