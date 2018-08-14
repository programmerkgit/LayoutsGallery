import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesGalleryComponent } from './sizes-gallery.component';

describe('SizesGalleryComponent', () => {
  let component: SizesGalleryComponent;
  let fixture: ComponentFixture<SizesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
