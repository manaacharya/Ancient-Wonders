import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhodesComponent } from './rhodes.component';

describe('RhodesComponent', () => {
  let component: RhodesComponent;
  let fixture: ComponentFixture<RhodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
