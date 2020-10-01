import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRankComponent } from './update-rank.component';

describe('UpdateRankComponent', () => {
  let component: UpdateRankComponent;
  let fixture: ComponentFixture<UpdateRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
