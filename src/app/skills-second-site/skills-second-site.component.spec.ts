import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSecondSiteComponent } from './skills-second-site.component';

describe('SkillsSecondSiteComponent', () => {
  let component: SkillsSecondSiteComponent;
  let fixture: ComponentFixture<SkillsSecondSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSecondSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsSecondSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
