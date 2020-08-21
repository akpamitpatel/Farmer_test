import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerafterloginComponent } from './farmerafterlogin.component';

describe('FarmerafterloginComponent', () => {
  let component: FarmerafterloginComponent;
  let fixture: ComponentFixture<FarmerafterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerafterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
