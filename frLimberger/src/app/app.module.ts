import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { UberMichComponent } from './uber-mich/uber-mich.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AnmeldenComponent } from './anmelden/anmelden.component';

@NgModule({
  declarations: [
    AppComponent,
    LeistungenComponent,
    HomeComponent,
    UberMichComponent,
    KontaktComponent,
    AnmeldenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'leistungen', component: LeistungenComponent},
      { path: 'uber-mich', component: UberMichComponent},
      { path: 'kontakt', component: KontaktComponent},
      { path: 'anmelden', component: AnmeldenComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
