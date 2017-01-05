import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { BlogPost } from './blog-post';

@Component({
  moduleId: module.id,
  selector: 'blog-post-preview',
  templateUrl: 'blog-post-preview.component.html'
})
export class BlogPostPreviewComponent implements OnInit {
  @Input()
  id: number;

  contentPreview: string;

  @Input()
  title: string;

  @Input()
  publishDate: string;

  @Input()
  content: string;

  @Input()
  labels: string[];


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