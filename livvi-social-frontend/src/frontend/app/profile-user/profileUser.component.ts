import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-profile-user',
    standalone:true,
    imports: [CommonModule, RouterModule],
    templateUrl: './profileUser.component.html',
    styleUrl: './profileUser.component.css'
})

export class ProfileUserComponent {

}