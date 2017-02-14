import { Injectable } from '@angular/core';

declare var emailjs: any;

@Injectable()
export class EmailJsService {
  private EMAIL_USER_KEY: string = "user_zMITbW7sxLURrKiTSyL2y";
  private service_id: string = "default_service"
  emailJsObj: any;
  emailSent: boolean;

  constructor() {
    // this.emailJsObj.sendAuditForm = emailjs.sendForm(this.service_id, 'audit_form');
    this.emailJsObj = emailjs;

  }

  sendContactForm() {
    console.log("contact form submitted!");
  }

  sendAuditForm() {

    let template_id = "audit_form";

    this.emailJsObj.sendForm(this.service_id, template_id, "auditForm")
        .then(function() {
            console.log("email sent successfully");
        }, function(err: any) {
            console.log("email not sent");
        });

  }

}
