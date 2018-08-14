import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsGalleryComponent } from './fonts-gallery.component';

describe('FontsGalleryComponent', () => {
  let component: FontsGalleryComponent;
  let fixture: ComponentFixture<FontsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
