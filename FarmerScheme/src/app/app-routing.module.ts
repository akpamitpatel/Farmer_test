import { MarketplaceComponent } from './marketplace/marketplace.component';
import { FarmerafterloginComponent } from './farmerafterlogin/farmerafterlogin.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { HomeComponent } from './home/home.component';
import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'bidderregistration', component: BidderregistrationComponent},
  {path:'farmerregistration', component: FarmerregistrationComponent},
  {path:'farmerafterlogin', component: FarmerafterloginComponent},
  {path:'marketplace', component: MarketplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
