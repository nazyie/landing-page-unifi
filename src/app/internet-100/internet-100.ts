import { Component } from '@angular/core';

@Component({
  selector: 'app-internet-100',
  imports: [],
  templateUrl: './internet-100.html',
  styleUrl: './internet-100.css'
})
export class Internet100 {
  goToWebsite(param: string) {
    window.open('https://www.whatsapp.com?' + param, '_blank'); // new tab
  }
}
