import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { BookingComponent } from './user/booking/booking.component';
import { BookedlistComponent } from './user/bookedlist/bookedlist.component';
import { FormsModule } from '@angular/forms';

let userRoutes: Routes = [
  {
    path: 'user', component: UserComponent, 
    children: [
      { path: 'booking', component: BookingComponent },
      { path: 'bookedlist', component: BookedlistComponent }
    ]
  }
]

@NgModule({
  declarations: [UserComponent,BookingComponent,BookedlistComponent],
  imports: [
    FormsModule,CommonModule, RouterModule.forChild(userRoutes)
  ],
  exports:[RouterModule],
})
export class UserRoutingModule { }