import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("BlogComponent ngOnInit");
  }

}