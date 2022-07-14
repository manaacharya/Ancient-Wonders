import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MausoleumComponent } from './mausoleum.component';

describe('MausoleumComponent', () => {
  let component: MausoleumComponent;
  let fixture: ComponentFixture<MausoleumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MausoleumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MausoleumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
