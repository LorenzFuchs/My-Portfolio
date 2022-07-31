import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeFourthSiteComponent } from './about-me-fourth-site.component';

describe('AboutMeFourthSiteComponent', () => {
  let component: AboutMeFourthSiteComponent;
  let fixture: ComponentFixture<AboutMeFourthSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeFourthSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeFourthSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
