import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';

const routes: Routes = [
  {path: '', redirectTo: '/left-navigation', pathMatch: 'full'},
  {path: 'left-navigation', component: LeftNavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
