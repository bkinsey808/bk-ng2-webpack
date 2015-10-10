import { Component } from 'angular2/angular2';

@Component({
  selector: 'home',
  templateUrl: 'content/home/home.template.html'
})
export class HomeComponent {
  constructor() {
    name='HOME';
    console.log('homeie!');
  }
}
