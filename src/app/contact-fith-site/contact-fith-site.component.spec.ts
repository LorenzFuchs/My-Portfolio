import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFithSiteComponent } from './contact-fith-site.component';

describe('ContactFithSiteComponent', () => {
  let component: ContactFithSiteComponent;
  let fixture: ComponentFixture<ContactFithSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFithSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFithSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
