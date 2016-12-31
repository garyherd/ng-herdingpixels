import { AppComponent } from './app.component';
import { BlogPostPreviewComponent } from './blog-post-preview.component';
import { TestModuleSetting } from './testing-module-model';
import { POSTS } from './mock-posts'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('BlogPreviewComponent', function () {
  let de: DebugElement;
  let comp: BlogPostPreviewComponent;
  let fixture: ComponentFixture<BlogPostPreviewComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule(TestModuleSetting).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostPreviewComponent);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('header'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should create a preview paragraph with p-tag input', () => {
    fixture.detectChanges();
    let expectedStr = 'This is ...';
    comp.content = '<p>This is the preview paragraph.</p><p>This is the body paragraph.</p>'
    comp.getPreviewParagraph();

    expect(comp.contentPreview).toMatch(expectedStr);
  });

  it('should create a preview without p-tag input', () => {
    fixture.detectChanges();
    let expectedStr = 'This is a time ...';
    comp.content = 'This is a time for all good men to come to the aid of their country';
    comp.getPreviewParagraph();

    expect(comp.contentPreview).toMatch(expectedStr);
  });

  it('should create a preview from advanced string feature', () => {
    fixture.detectChanges();
    let expectedStr = 'This is ...';
    comp.content = `
    <p>This is the preview paragraph.</p>
    <p>This is the body paragraph.</p>
    `
    comp.getPreviewParagraph();

    expect(comp.contentPreview).toMatch(expectedStr);
  })

});