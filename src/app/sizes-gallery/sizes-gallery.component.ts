import {Component, OnInit} from '@angular/core';
import {SIZES} from '../../lib/sizes';

@Component({
  selector: 'app-sizes-gallery',
  templateUrl: './sizes-gallery.component.html',
  styleUrls: ['./sizes-gallery.component.css']
})
export class SizesGalleryComponent implements OnInit {

  sizes = SIZES;

  units: string[] = [];

  selectedUnit: string;

  selectedSizes: string[];

  setSelectedSizes() {
    this.selectedSizes = this.sizes[this.selectedUnit];
  }

  constructor() {
  }

  ngOnInit() {
    for (const unit in this.sizes) {
      if (this.sizes.hasOwnProperty(unit)) {
        this.units.push(unit);
      }
    }
    this.selectedUnit = this.units[0];
    this.selectedSizes = this.sizes[this.selectedUnit];
  }

}
