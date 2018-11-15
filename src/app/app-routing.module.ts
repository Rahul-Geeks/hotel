import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
import { HotelEventsComponent } from './home/hotel-events/hotel-events.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllhotelsComponent } from './hotels/allhotels/allhotels.component';
import { HotelregComponent } from './hotels/hotelreg/hotelreg.component';
import { RoutingGuard } from './auth/routing.guard';
import { AdminGuard } from './auth/admin.guard';
import { FilterhotelComponent } from './hotels/filterhotel/filterhotel.component';

let routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'hotels', component: AllhotelsComponent, canActivate:[RoutingGuard] },
  { path: 'hotels/events', component: HotelEventsComponent },
  { path: 'hotels/hotelregistration', component: HotelregComponent, canActivate:[RoutingGuard, AdminGuard]  },
  { path: 'hotels/hotelevents', component: HotelEventsComponent },
  { path: 'hotels/filterhotel', component: FilterhotelComponent },
  { path: 'hotels/:hotelId', component: HotelsDetailsComponent },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }