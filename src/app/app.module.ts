import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {LoginComponent} from './core/login/login.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {ApprovalDialogComponent} from './core/dialogs/approval-dialog/approval-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopBarComponent} from './core/dashboard/inner-com/top-bar/top-bar.component';
import {LeftSideNavBarComponent} from './core/dashboard/inner-com/left-side-nav-bar/left-side-nav-bar.component';
import {MenuContainerComponent} from './core/dashboard/inner-com/left-side-nav-bar/menu-container/menu-container.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {AuthGuard} from "./core/auth/auth.guard";
import {AlertAndErrorInterceptor} from "./core/alert-and-error/alert-and-error.interceptor";
import {AuthInterceptor} from "./core/auth/auth.interceptor";
import { GetTokenComponent } from './core/components/get-token/get-token.component';
import { MyTokensComponent } from './core/components/my-tokens/my-tokens.component';
import { QRDialogComponent } from './core/components/qrdialog/qrdialog.component';
import { CustomerDashboardComponent } from './core/components/customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    ApprovalDialogComponent,
    TopBarComponent,
    LeftSideNavBarComponent,
    MenuContainerComponent,
    GetTokenComponent,
    MyTokensComponent,
    QRDialogComponent,
    CustomerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    // ToastrModule.forRoot(),
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule

  ],
  providers: [AuthGuard
    , {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AlertAndErrorInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule {
}
