import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkThirdSiteComponent } from './work-third-site.component';

describe('WorkThirdSiteComponent', () => {
  let component: WorkThirdSiteComponent;
  let fixture: ComponentFixture<WorkThirdSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkThirdSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkThirdSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
