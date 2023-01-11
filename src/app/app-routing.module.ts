import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {AuthGuard} from "./core/auth/auth.guard";
import {GetTokenComponent} from "./core/components/get-token/get-token.component";
import {MyTokensComponent} from "./core/components/my-tokens/my-tokens.component";
import {CustomerDashboardComponent} from "./core/components/customer-dashboard/customer-dashboard.component";
import {RequestFuleQuotaComponent} from "./core/components/request-fule-quota/request-fule-quota.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
      {path:'',component:CustomerDashboardComponent},
      {path:'fuel',component:GetTokenComponent},
      {path:'token',component:MyTokensComponent},
      {path:'quota',component:RequestFuleQuotaComponent},
    ]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
