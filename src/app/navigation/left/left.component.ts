import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'left',
  templateUrl: './left.component.html',
  //styleUrls: ['./left.component.css']
})
export class Left {

    constructor(
        private router: Router,
    ) { }
}
