import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './viewer/passenger/home/home.component';
import { FindTicketsComponent } from './viewer/passenger/sidebar/find-tickets/find-tickets.component';
import { RegulationsComponent } from './viewer/passenger/sidebar/regulations/regulations.component';
import { MainComponent } from './viewer/passenger/main/main.component';
import { ResultTicketsComponent } from './viewer/passenger/sidebar/result-tickets/result-tickets.component';
import { CheckTicketsComponent } from './viewer/passenger/sidebar/check-tickets/check-tickets.component';
import { PayTicketsComponent } from './viewer/passenger/sidebar/pay-tickets/pay-tickets.component';
import { AboutUsComponent } from './viewer/passenger/sidebar/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/trangchu', pathMatch: 'full' },
  { path: 'trangchu', component: MainComponent },
  { path: 'tim-ve', component: FindTicketsComponent },
  { path: 'regulations', component: RegulationsComponent },
  { path: 'ket-qua', component:ResultTicketsComponent  },
  { path: 'kiem-tra-ve', component:CheckTicketsComponent  },
  { path: 'tra-ve', component:PayTicketsComponent },
  { path: 'lien-he', component:AboutUsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
