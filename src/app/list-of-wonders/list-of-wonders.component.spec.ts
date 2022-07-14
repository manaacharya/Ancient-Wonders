import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfWondersComponent } from './list-of-wonders.component';

describe('ListOfWondersComponent', () => {
  let component: ListOfWondersComponent;
  let fixture: ComponentFixture<ListOfWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfWondersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
