import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gardens',
  templateUrl: './gardens.component.html',
  styleUrls: ['./gardens.component.css']
})
export class GardensComponent implements OnInit {
  title = "The Hanging Gardens of Babylon"
  constructor() { }

  ngOnInit(): void {
  }

}
