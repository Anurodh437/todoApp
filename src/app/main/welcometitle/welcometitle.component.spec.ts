import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcometitleComponent } from './welcometitle.component';

describe('WelcometitleComponent', () => {
  let component: WelcometitleComponent;
  let fixture: ComponentFixture<WelcometitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcometitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcometitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
