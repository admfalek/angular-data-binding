import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input('numberTypes') numberTypeVal: string;

  constructor() { }

  ngOnInit() {
      console.log(1);
  }

}