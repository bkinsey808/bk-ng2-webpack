import { Component } from 'angular2/angular2';

@Component({
  selector: 'app-footer',
  templateUrl: 'layout/footer/footer.template.html'
})
export class FooterComponent {
  constructor() {
    console.log('footer');
  }
}
