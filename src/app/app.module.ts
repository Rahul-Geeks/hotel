import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoutingModule } from './app.routing.module';
import { UserComponent } from './user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { PizzaService } from './services/pizza.services';
import { UserService } from './services/users.services';


@NgModule({
  declarations: [
    AppComponent, PizzaComponent,
    RegistrationComponent, LoginComponent,
    HeaderComponent, FooterComponent,
    NavigationComponent, NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    UserRoutingModule,
  ],
  providers: [PizzaService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }