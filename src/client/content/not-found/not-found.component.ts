import { Component } from 'angular2/angular2';

@Component({
  selector: 'app-menu',
  templateUrl: 'content/not-found/not-found.template.html'
})
export class NotFoundComponent {
  constructor() {
    console.log('not found');
  }
}
