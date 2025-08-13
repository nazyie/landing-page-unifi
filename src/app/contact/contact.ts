import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  goToWebsite(param: string) {
    window.open('https://www.whatsapp.com' + param, '_blank'); // new tab
  }
}
