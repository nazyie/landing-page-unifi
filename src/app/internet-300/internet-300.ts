import { Component } from '@angular/core';

@Component({
  selector: 'app-internet-300',
  imports: [],
  templateUrl: './internet-300.html',
  styleUrl: './internet-300.css'
})
export class Internet300 {
  goToWebsite(param: string) {
    window.open('https://www.whatsapp.com?' + param, '_blank'); // new tab
  }
}
