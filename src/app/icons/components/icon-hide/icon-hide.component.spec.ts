import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHideComponent } from './icon-hide.component';

describe('IconHideComponent', () => {
  let component: IconHideComponent;
  let fixture: ComponentFixture<IconHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconHideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
