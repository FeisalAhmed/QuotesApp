import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesAppComponent } from './components/qoutes-app/qoutes-app.component';
import { QuotesComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    QoutesAppComponent,
    QuotesComponent,
    QuoteDetailComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
