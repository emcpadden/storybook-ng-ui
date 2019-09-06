import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <p>
      button works!!! 
    </p>
    <hr />
    <button [disabled]="disabled">{{text}}</button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "BUTTON-TEXT-NOT-SET";
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
