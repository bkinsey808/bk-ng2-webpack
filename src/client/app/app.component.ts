/// <reference path="../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../../node_modules/angular2/bundles/typings/angular2/router.d.ts" />
/// <reference path="../../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

import { HTTP_BINDINGS } from 'angular2/http';
import { bind, Component, bootstrap } from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_BINDINGS,
  LocationStrategy,
  HashLocationStrategy,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

import { HeaderComponent } from '../layout/header/header.component';
import { NavComponent    } from '../layout/nav/nav.component';
import { AsideComponent  } from '../layout/aside/aside.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { BodyComponent   } from '../layout/body/body.component';
import { HomeComponent   } from '../content/home/home.component';
import { AboutComponent  } from '../content/about/about.component';
import { NotFoundComponent } from '../content/not-found/not-found.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html',
  directives: [
    HeaderComponent,
    NavComponent,
    AsideComponent,
    BodyComponent,
    FooterComponent
  ]
})
@RouteConfig([
  //      URL           state               class
  { path: '/',      as: 'Home',      component: HomeComponent },
  { path: '/about', as: 'About',     component: AboutComponent },
  { path: '/**',    as: 'Not Found', component: NotFoundComponent }
])
class AppComponent {
  name: string;
  constructor() {
    this.name = 'World';
    console.log('app works ');
  }
}

// How do I do html5mode without hash urls?
bootstrap(AppComponent, [
	ROUTER_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy),
	bind(ROUTER_PRIMARY_COMPONENT).toValue(AppComponent)
]);
