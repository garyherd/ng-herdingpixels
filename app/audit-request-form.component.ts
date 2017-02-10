import { Component } from '@angular/core';

import { AuditRequestInfo } from './blog-post';
import { EmailJsService } from './emailjs.service';


@Component({
  moduleId: module.id,
  selector: 'audit-request-form',
  templateUrl: './audit-request-form.component.html'
})

export class AuditRequestFormComponent {

  requestInfo: AuditRequestInfo = {};

  constructor(private emailJsService: EmailJsService) {}

  get diagnostic() { return JSON.stringify(this.requestInfo); }

  submitAuditForm () {
    this.emailJsService.sendAuditForm();
  }

}

