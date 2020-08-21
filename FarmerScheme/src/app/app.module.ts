
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidderregistrationComponent } from './bidderregistration/bidderregistration.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FarmerregistrationComponent } from './farmerregistration/farmerregistration.component';
import { FarmerafterloginComponent } from './farmerafterlogin/farmerafterlogin.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SellrequestComponent } from './sellrequest/sellrequest.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BidderregistrationComponent,
    FarmerregistrationComponent,
    FarmerafterloginComponent,
    MarketplaceComponent,
    SellrequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
