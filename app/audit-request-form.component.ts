import { Component } from '@angular/core';

import { AuditRequestInfo } from './blog-post';
import { EmailJsService } from './emailjs.service';

import { ReCaptchaModule } from 'angular2-recaptcha';


@Component({
  moduleId: module.id,
  selector: 'audit-request-form',
  templateUrl: './audit-request-form.component.html'
})

export class AuditRequestFormComponent {

  requestInfo: AuditRequestInfo = {};
  emailSent: boolean;
  emailNotSent: boolean;

  constructor(private emailJsService: EmailJsService) {
    this.emailSent = false;
    this.emailNotSent = false;
  }

  submitAuditForm () {
    this.emailJsService.sendAuditForm().then((result: any) => {
      result === "OK" ? this.emailSent = true : this.emailNotSent = true;
    });
  }

}

