import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyramids',
  templateUrl: './pyramids.component.html',
  styleUrls: ['./pyramids.component.css']
})
export class PyramidsComponent implements OnInit {
  title = "The Great Pyramids of Giza"
  constructor() { }

  ngOnInit(): void {
  }

}
