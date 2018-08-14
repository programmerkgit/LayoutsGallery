import {Component, OnInit} from '@angular/core';
import {FONTS} from '../../lib/font';

@Component({
  selector: 'app-fonts-gallery',
  templateUrl: './fonts-gallery.component.html',
  styleUrls: ['./fonts-gallery.component.css']
})
export class FontsGalleryComponent implements OnInit {

  fonts = FONTS;
  fontKeys: string[] = [];
  selectedKey: string;
  selectedFonts: string[];

  constructor() {

  }

  setSelectedFonts() {
    this.selectedFonts = this.fonts[this.selectedKey];
  }

  ngOnInit() {
    for (const key in this.fonts) {
      if (this.fonts.hasOwnProperty(key)) {
        this.fontKeys.push(key);
      }
    }
    this.selectedKey = this.fontKeys[0];
    this.selectedFonts = this.fonts[this.selectedKey];
  }

}
