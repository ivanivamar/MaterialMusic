import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [
        '../../../styles.sass',
        './sidebar.component.sass'
    ]
})
export class SidebarComponent {

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

}
