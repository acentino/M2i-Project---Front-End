import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditMessageComponent } from './page-edit-message.component';

describe('PageEditMessageComponent', () => {
  let component: PageEditMessageComponent;
  let fixture: ComponentFixture<PageEditMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
