import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldComponent } from './input-data.component';

describe('TextfieldComponent', () => {
  let component: TextfieldComponent;
  let fixture: ComponentFixture<TextfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextfieldComponent],
    });
    fixture = TestBed.createComponent(TextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
