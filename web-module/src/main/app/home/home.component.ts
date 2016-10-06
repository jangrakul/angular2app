/**
 * Created by jangrakul on 27/09/2016.
 */

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.css' ]
})
export class HomeComponent {
    title: string = "Home";
}