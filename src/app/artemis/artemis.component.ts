import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artemis',
  templateUrl: './artemis.component.html',
  styleUrls: ['./artemis.component.css']
})
export class ArtemisComponent implements OnInit {
  title = "The Temple of Artemis"
  constructor() { }

  ngOnInit(): void {
  }

}
