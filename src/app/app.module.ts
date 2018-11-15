import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { TopRatedHotelsComponent } from './home/top-rated-hotels/top-rated-hotels.component';
import { HotelEventsComponent } from './home/hotel-events/hotel-events.component';
import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './home/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingService } from './services/app-routing.service';
import { AllhotelsComponent } from './hotels/allhotels/allhotels.component';
import { HotelregComponent } from './hotels/hotelreg/hotelreg.component';
import { UserService } from './services/user.service';
import { RoutingGuard } from './auth/routing.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AdminGuard } from './auth/admin.guard';
import { FilterhotelComponent } from './hotels/filterhotel/filterhotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent,
    NavigationComponent, NotfoundComponent, HomeComponent, CarouselComponent, TopRatedHotelsComponent, HotelEventsComponent, HotelsDetailsComponent, NavbarComponent, LoginComponent, RegistrationComponent, AllhotelsComponent, HotelregComponent, FilterhotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
 
  ],
  providers: [AppRoutingService, UserService, RoutingGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }