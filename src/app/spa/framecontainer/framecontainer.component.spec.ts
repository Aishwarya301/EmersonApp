import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramecontainerComponent } from './framecontainer.component';

describe('FramecontainerComponent', () => {
  let component: FramecontainerComponent;
  let fixture: ComponentFixture<FramecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramecontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
