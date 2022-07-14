import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mausoleum',
  templateUrl: './mausoleum.component.html',
  styleUrls: ['./mausoleum.component.css']
})
export class MausoleumComponent implements OnInit {
  title = "Mausoleum of Halicarnassus"
  constructor() { }

  ngOnInit(): void {
  }

}
