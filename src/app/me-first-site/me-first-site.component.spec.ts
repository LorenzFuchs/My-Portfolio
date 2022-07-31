import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeFirstSiteComponent } from './me-first-site.component';

describe('MeFirstSiteComponent', () => {
  let component: MeFirstSiteComponent;
  let fixture: ComponentFixture<MeFirstSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeFirstSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeFirstSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
