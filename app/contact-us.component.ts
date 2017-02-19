import { Component, OnInit } from '@angular/core';

// import { MessageInfo } from './blog-post';
import { EmailJsService } from './emailjs.service';

import { ReCaptchaModule } from 'angular2-recaptcha';

@Component({
  moduleId: module.id,
  selector: 'contact-us',
  templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

  messageInfo: MessageInfo = {};
  emailSent: boolean;
  emailNotSent: boolean;

  constructor(private emailJsService: EmailJsService) { }

  ngOnInit() {
    this.emailSent = false;
    this.emailNotSent = false;
   }

  submitMessageForm () {
    this.emailJsService.sendContactForm().then((result: any) => {
      result === "OK" ? this.emailSent = true : this.emailNotSent = true;
  });
  }
}

export interface MessageInfo {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}