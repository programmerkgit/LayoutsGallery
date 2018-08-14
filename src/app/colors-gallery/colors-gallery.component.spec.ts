import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsGalleryComponent } from './colors-gallery.component';

describe('ColorsGalleryComponent', () => {
  let component: ColorsGalleryComponent;
  let fixture: ComponentFixture<ColorsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
