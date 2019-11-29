import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesAppComponent } from './qoutes-app.component';

describe('QoutesAppComponent', () => {
  let component: QoutesAppComponent;
  let fixture: ComponentFixture<QoutesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QoutesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
