import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OekolandbauComponent } from './oekolandbau.component';

describe('OekolandbauComponent', () => {
  let component: OekolandbauComponent;
  let fixture: ComponentFixture<OekolandbauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OekolandbauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OekolandbauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
