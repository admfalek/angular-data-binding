import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public started: boolean = false;
  gameNumb: number = 1;
  timer: any;
  
  numberTypes: string = 'odd';

  constructor() { }
  ngOnInit() { }
  
  toggleBtn() {
      if(this.started) {
          this.started = false;
          clearInterval(this.timer);
      } else {
          this.started = true;
          this.timer = setInterval(() => { 
              this.gameNumb++;
              this.gameNumb%2>0 ? this.numberTypes = "odd" : this.numberTypes = "even"; 
          }, 1000);
      }
  }
}
