import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'right',
  templateUrl: './right.component.html',
  //styleUrls: ['./right.component.css']
})
export class Right {

    constructor(
        private router: Router,
    ) { }
}
