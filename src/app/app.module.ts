import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';

//services
import { QuotesService } from './services/quotes.service';
import { CreateQuoteComponent } from './backend/create-quote/create-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendQuotesComponent } from './backend/backend-quotes/backend-quotes.component';

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
    BackendQuotesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
      QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
