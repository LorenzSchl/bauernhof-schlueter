import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierhaltungComponent } from './tierhaltung.component';

describe('TierhaltungComponent', () => {
  let component: TierhaltungComponent;
  let fixture: ComponentFixture<TierhaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierhaltungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierhaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
