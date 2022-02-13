import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {fader, slider} from "./route-animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
  // animations: [slider, fader]

})
export class AppComponent {
  title = 'ng-animations';
  isAnimate = true;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
