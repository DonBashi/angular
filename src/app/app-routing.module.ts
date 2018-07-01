import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ApiComponent } from './api/api.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'about', component:AboutComponent}
  {path:'api', component:ApiComponent},
  {path:'cryptography', component:CryptographyComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
