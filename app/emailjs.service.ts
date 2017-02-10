import { Injectable } from '@angular/core';

@Injectable()
export class EmailJsService {

  constructor() { }

  sendContactForm() {
    console.log("contact form submitted!");
  }

  sendAuditForm() {
    console.log("audit request form submitted!");
  }
}