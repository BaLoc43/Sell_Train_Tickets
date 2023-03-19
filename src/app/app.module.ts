import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './viewer/passenger/home/home.component';
import { FindTicketsComponent } from './viewer/passenger/sidebar/find-tickets/find-tickets.component';
import { ReservationComponent } from './viewer/passenger/sidebar/reservation/reservation.component';
import { PayTicketsComponent } from './viewer/passenger/sidebar/pay-tickets/pay-tickets.component';
import { TicketLookupComponent } from './viewer/passenger/sidebar/ticket-lookup/ticket-lookup.component';
import { TrainTimeFaresComponent } from './viewer/passenger/sidebar/train-time-fares/train-time-fares.component';
import { RegulationsComponent } from './viewer/passenger/sidebar/regulations/regulations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindTicketsComponent,
    ReservationComponent,
    PayTicketsComponent,
    TicketLookupComponent,
    TrainTimeFaresComponent,
    RegulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
