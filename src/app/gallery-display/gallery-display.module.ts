import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryDisplayComponent } from './gallery-display.component';



@NgModule({
  declarations: [ GalleryDisplayComponent ],
  exports: [
    GalleryDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GalleryDisplayModule { }
