import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectoresComponent } from './conectores.component';

describe('ConectoresComponent', () => {
  let component: ConectoresComponent;
  let fixture: ComponentFixture<ConectoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConectoresComponent]
    });
    fixture = TestBed.createComponent(ConectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
