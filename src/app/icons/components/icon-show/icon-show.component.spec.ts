import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconShowComponent } from './icon-show.component';

describe('IconShowComponent', () => {
  let component: IconShowComponent;
  let fixture: ComponentFixture<IconShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
