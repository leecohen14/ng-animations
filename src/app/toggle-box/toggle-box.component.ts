import { Component } from '@angular/core';
import {animate, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-toggle-box',
  templateUrl: './toggle-box.component.html',
  styleUrls: ['./toggle-box.component.scss'],
  animations: [
    trigger('dimBox', [
      state('greenAndTall',
        style({ height: '200px', width: '200px', opacity: 1, backgroundColor: 'green', borderRadius: '50%' })
      ),
      state('redAndShort',
        style({ height: '100px', width: '100px', opacity: 1, backgroundColor: 'red' })
      ),
      transition('greenAndTall => redAndShort', [
        animate('0.3s')
      ]),
      transition('redAndShort => greenAndTall', [
        animate('0.7s')
      ])
    ]),
    trigger('fade', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))])
]
})
export class ToggleBoxComponent {
  isDimmed = false;
  showBtn = true;
  timeout = 0;
  onDone(){
    setTimeout(()=>{
      this.showBtn = !this.showBtn
    },this.timeout)
  }
}
