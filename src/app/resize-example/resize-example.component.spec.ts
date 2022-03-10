import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeExampleComponent } from './resize-example.component';

describe('ResizeExampleComponent', () => {
  let component: ResizeExampleComponent;
  let fixture: ComponentFixture<ResizeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
