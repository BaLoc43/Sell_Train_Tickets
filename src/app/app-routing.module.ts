import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindTicketsComponent } from './viewer/passenger/sidebar/find-tickets/find-tickets.component';
import { RegulationsComponent } from './viewer/passenger/sidebar/regulations/regulations.component';

const routes: Routes = [
  { path: 'find-tickets', component: FindTicketsComponent },
  { path: 'regulations', component: RegulationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
