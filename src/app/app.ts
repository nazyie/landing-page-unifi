import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Internet100 } from './internet-100/internet-100';
import { Internet300 } from './internet-300/internet-300';
import { Internet500 } from './internet-500/internet-500';
import { FreeGift } from './free-gift/free-gift';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Internet100, Internet300, Internet500, FreeGift, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'unifi-adi-landing-page';

  @ViewChild('aboutUs') aboutUs!: ElementRef;
  @ViewChild('package') package!: ElementRef;

  scrollToAboutUs() {
    this.aboutUs.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToPackage() {
    this.package.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
