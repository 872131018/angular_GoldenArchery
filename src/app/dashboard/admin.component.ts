import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    template: require('./admin.component.html'),
    styles: [require('./admin.component.css')]
})

export class Admin implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void { }
}
