import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = "Ancient Wonders"
  subtitle = "The seven ancient wonders of the world"
  constructor(private router: Router){}
  ngOnInit() {
  }

}
