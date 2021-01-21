import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ul>
      <li routerLink="">Home</li>
      <li routerLink="cats">Cats</li>
      <li routerLink="settings">Settings</li>
      <li routerLink="about">About</li>
    </ul>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
