import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { BlogPost } from './blog-post';

@Component({
  moduleId: module.id,
  selector: 'blog-post-preview',
  templateUrl: 'blog-post-preview.component.html'
})
export class BlogPostPreviewComponent implements OnInit, BlogPost {
  id: string;

  @Input()
  title: string;

  @Input()
  publishDate: string;

  labels: string[];

  @Input()
  content: string;
  contentPreview: string;

  constructor() {
    this.content = "";
  }

  ngOnInit() {
    this.getPreviewParagraph();
  }

  getPreviewParagraph(): void {
    this.contentPreview = this.content.replace(/<p>/g, "").replace(/<\/p>/g, "") + " ...";
  }
}