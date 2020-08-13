import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterHomeComponent } from './starter-home/starter-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/pharmacist', pathMatch: 'full' },
  {path: 'pharmacist' , component: StarterHomeComponent},
  {path: '**', redirectTo: '/pharmacist', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
