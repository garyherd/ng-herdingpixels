import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wrapper',
  providers: [],
  templateUrl: 'wrapper.component.html'
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() { console.log('ngOnInit'); }

}