import { Component, OnInit } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-alexandria',
  templateUrl: './alexandria.component.html',
  styleUrls: ['./alexandria.component.css']
})
export class AlexandriaComponent implements OnInit {
  constructor() { }
  title = "The Pharos (Lighthouse) of Alexandria"
  ngOnInit(): void {
  }

}
