import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './viewer/passenger/home/home.component';
import { FindTicketsComponent } from './viewer/passenger/sidebar/find-tickets/find-tickets.component';
import { RegulationsComponent } from './viewer/passenger/sidebar/regulations/regulations.component';
import { MainComponent } from './viewer/passenger/main/main.component';
import { ResultTicketsComponent } from './viewer/passenger/sidebar/result-tickets/result-tickets.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'tim-ve', component: FindTicketsComponent },
  { path: 'regulations', component: RegulationsComponent },
  { path: 'ket-qua', component:ResultTicketsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
