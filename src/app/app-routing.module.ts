import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {AuthGuard} from "./core/auth/auth.guard";
import {GetTokenComponent} from "./core/components/get-token/get-token.component";
import {MyTokensComponent} from "./core/components/my-tokens/my-tokens.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
      {path:'fuel',component:GetTokenComponent},
      {path:'token',component:MyTokensComponent}
    ]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
