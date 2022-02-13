import { Component } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-n',
  templateUrl: './n.component.html',
  styleUrls: ['./n.component.scss'],
  animations: [
    trigger('moveCigar', [
      state('left',
        style( { left: '0px'})
      ),
      state('right',
        style( { left: '130px'})
      ),
      transition('left => right', [
        animate("0.5s", keyframes([
          style({ left: '30px',transform: 'rotate(0deg)'}),
          style({ left: '60px', transform: 'rotate(90deg)'}),
          style({ left: '90px', transform: 'rotate(180deg)'}),
          style({ left: '130px', transform: 'rotate(270deg)'}),
        ]))
      ]),
      transition('right => left', [
        animate("0.5s", keyframes([
          style({ left: '130px', transform: 'rotate(270deg)'}),
          style({ left: '90px', transform: 'rotate(180deg)'}),
          style({ left: '60px', transform: 'rotate(90deg)'}),
          style({ left: '30px',transform: 'rotate(0deg)'}),
        ]))
      ]),
    ]),
  ]
})
export class NComponent {
  isRight = false;
}
