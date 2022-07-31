import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MeFirstSiteComponent } from './me-first-site/me-first-site.component';
import { SkillsSecondSiteComponent } from './skills-second-site/skills-second-site.component';
import { WorkThirdSiteComponent } from './work-third-site/work-third-site.component';
import { AboutMeFourthSiteComponent } from './about-me-fourth-site/about-me-fourth-site.component';
import { ContactFithSiteComponent } from './contact-fith-site/contact-fith-site.component';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MeFirstSiteComponent,
    SkillsSecondSiteComponent,
    WorkThirdSiteComponent,
    AboutMeFourthSiteComponent,
    ContactFithSiteComponent,
    FooterComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
