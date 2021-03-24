import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-display',
  template: `
    <div class="display-container">
      <div class="display">
      </div>
      <span class="char">{{text}}</span>
    </div>
  `,
  styleUrls: [ './gallery-display.component.css' ]
})
export class GalleryDisplayComponent implements OnInit {

  @Input() text: string;

  constructor() {
  }

  ngOnInit() {
  }

}
