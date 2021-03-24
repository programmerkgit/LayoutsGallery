import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FontsGalleryComponent} from './fonts-gallery/fonts-gallery.component';
import {SizesGalleryComponent} from './sizes-gallery/sizes-gallery.component';
import {ColorsGalleryComponent} from './colors-gallery/colors-gallery.component';

const GalleryRouting: Routes = [
  {path: 'fonts', component: FontsGalleryComponent},
  {path: 'sizes', component: SizesGalleryComponent},
  {path: 'colors', component: ColorsGalleryComponent},
  {path: '', redirectTo: 'colors', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(GalleryRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
