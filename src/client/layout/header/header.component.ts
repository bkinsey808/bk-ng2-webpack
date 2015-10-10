import { Component } from 'angular2/angular2';

@Component({
  selector: 'app-header',
  templateUrl: 'layout/header/header.template.html'
})
export class HeaderComponent {
  constructor() {
    console.log('header');
  }
}
