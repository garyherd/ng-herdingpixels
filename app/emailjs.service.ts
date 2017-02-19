import { Injectable } from '@angular/core';

declare var emailjs: any;

@Injectable()
export class EmailJsService {
  private EMAIL_USER_KEY: string = "user_zMITbW7sxLURrKiTSyL2y";
  private service_id: string = "default_service"
  emailJsObj: any;
  emailJsSent: boolean;

  constructor() {
    // this.emailJsObj.sendAuditForm = emailjs.sendForm(this.service_id, 'audit_form');
    this.emailJsObj = emailjs;
    this.emailJsSent = false;
  }

  sendContactForm() {
    return this.emailJsObj.sendForm(this.service_id, "contact_form", "contactForm")
      .then(function(response: any) {
        return response.text;
      }, function(err: any) {
         console.log("email not sent");
      });
  }

  sendAuditForm() {
    return this.emailJsObj.sendForm(this.service_id, "audit_form", "auditForm")
      .then(function(response: any) {
        return response.text;
      }, function(err: any) {
         console.log("email not sent");
      });
  }
}
