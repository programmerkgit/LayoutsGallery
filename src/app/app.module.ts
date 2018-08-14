import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontsGalleryComponent } from './fonts-gallery/fonts-gallery.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SizesGalleryComponent } from './sizes-gallery/sizes-gallery.component';
import { ColorsGalleryComponent } from './colors-gallery/colors-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    FontsGalleryComponent,
    SizesGalleryComponent,
    ColorsGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
