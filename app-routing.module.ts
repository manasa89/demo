import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: 'business',
    loadChildren: 'app/business/business.module#BusinessModule'
  },
  {
    path: 'investors',
    loadChildren: 'app/investors/investors.module#InvestorsModule'
  },
  {
    path: 'media',
    loadChildren: 'app/media/media.module#MediaModule'
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    DisclaimerComponent,
    PrivacyPolicyComponent,
    ContactUsComponent
  ]
  exports: [RouterModule]
})
export class AppRoutingModule { }
