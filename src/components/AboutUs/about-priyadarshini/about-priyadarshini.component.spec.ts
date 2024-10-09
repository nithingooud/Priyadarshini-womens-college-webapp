import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPriyadarshiniComponent } from './about-priyadarshini.component';

describe('AboutPriyadarshiniComponent', () => {
  let component: AboutPriyadarshiniComponent;
  let fixture: ComponentFixture<AboutPriyadarshiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPriyadarshiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPriyadarshiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
