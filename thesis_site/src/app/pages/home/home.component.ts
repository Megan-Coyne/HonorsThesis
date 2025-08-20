import { Component } from '@angular/core';
import { NavButtonsComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavButtonsComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
