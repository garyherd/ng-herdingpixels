import { Component } from '@angular/core';

import { AuditRequestInfo } from './blog-post';


@Component({
  moduleId: module.id,
  selector: 'audit-request-form',
  templateUrl: './audit-request-form.component.html'
})

export class AuditRequestFormComponent {

  requestInfo: AuditRequestInfo = {};

  get diagnostic() { return JSON.stringify(this.requestInfo); }

}

