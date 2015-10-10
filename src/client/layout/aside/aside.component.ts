import { Component } from 'angular2/angular2';

@Component({
  selector: 'app-aside',
  templateUrl: 'layout/aside/aside.template.html'
})
export class AsideComponent {
  constructor() {
    console.log('aside');
  }
}
