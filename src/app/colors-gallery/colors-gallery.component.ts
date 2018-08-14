import {Component, OnInit} from '@angular/core';
import {COLORS} from '../../lib/colors';

@Component({
  selector: 'app-colors-gallery',
  templateUrl: './colors-gallery.component.html',
  styleUrls: ['./colors-gallery.component.css']
})
export class ColorsGalleryComponent implements OnInit {

  colors = COLORS;

  selectedHue: string;
  selectedColors: string[];

  hues: string[] = [];

  setSelectedColors() {
    this.selectedColors = this.colors[this.selectedHue];
  }

  constructor() {
  }

  ngOnInit() {
    for (const hue in this.colors) {
      if (this.colors.hasOwnProperty(hue)) {
        this.hues.push(hue);
      }
    }

    this.selectedHue = this.hues[0];
    this.selectedColors = this.colors[this.selectedHue];
  }

}
