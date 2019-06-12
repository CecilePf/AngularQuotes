import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material design
import { MaterialModule } from './material.module';

// firebase
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// services
import { QuotesService } from './services/quotes.service';
import { AuthService } from './authentification/services/auth.service';

// custom components
import { QuotesComponent } from './quotes/quotes.component';
import { CreateQuoteComponent } from './backend/create-quote/create-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendQuotesComponent } from './backend/backend-quotes/backend-quotes.component';
import { RegisterUserComponent } from './authentification/register-user/register-user.component';
import { LoginComponent } from './authentification/login/login.component';

const CONFIG: FirebaseAppConfig = {
    apiKey: "AIzaSyDVqKuYzDY_48NPVAtEn_mXAnvHGPcbOtc",
    authDomain: "motivator-fecc5.firebaseapp.com",
    databaseURL: "https://motivator-fecc5.firebaseio.com",
    projectId: "motivator-fecc5",
    storageBucket: "motivator-fecc5.appspot.com",
    messagingSenderId: "171260576769",
    appId: "1:171260576769:web:13165c76f505e453"
};

const ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: QuotesComponent },
    { path: 'quote/:id', component: QuoteDetailsComponent},
    { path: 'admin', component: BackendHomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    QuoteDetailsComponent,
    BackendHomeComponent,
    BackendQuotesComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
      QuotesService,
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
