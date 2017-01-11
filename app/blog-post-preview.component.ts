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

  @Input()
  commentCount: string;


  constructor() {
    this.content = "";
  }

  ngOnInit() {
    this.getPreviewParagraph();
  }

  getPreviewParagraph(): void {
    let splitStr = "name='more'";

    if (this.content.replace(/<p>/g, "").replace(/<\/p>/g, "").search(splitStr) === -1) {
      this.contentPreview =  this.content;
    } else {
      this.contentPreview = this.content.replace(/<p>/g, "").replace(/<\/p>/g, "").split(splitStr)[0];
    }
  }
}