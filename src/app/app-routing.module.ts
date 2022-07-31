import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MeFirstSiteComponent } from './me-first-site/me-first-site.component';



const routes: Routes = [
  {path: '', component: MeFirstSiteComponent},
  {path: 'imprint', component: ImprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
