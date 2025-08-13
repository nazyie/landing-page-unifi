import { Component } from '@angular/core';

@Component({
  selector: 'app-internet-500',
  imports: [],
  templateUrl: './internet-500.html',
  styleUrl: './internet-500.css'
})
export class Internet500 {
  goToWebsite(param: string) {
    window.open('https://www.whatsapp.com?' + param, '_blank'); // new tab
  }
}
