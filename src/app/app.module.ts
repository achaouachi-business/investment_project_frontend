import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatisticTransactionsComponent } from './components/statistic-transactions/statistic-transactions.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { SocietesComponent } from './societes/societes.component';
import { ChartAreaComponent } from './components/chart-area/chart-area.component';
import { MotPasseOublierComponent } from './components/mot-passe-oublier/mot-passe-oublier.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { RolesComponent } from './components/roles/roles.component';
import { AutoritiesComponent } from './components/autorities/autorities.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualiserTransactionsComponent } from './components/visualiser-transactions/visualiser-transactions.component';
import { VisualiserSocieteComponent } from './components/visualiser-societe/visualiser-societe.component';

@NgModule({
  declarations: [
    AppComponent,
    StatisticTransactionsComponent,
    TransactionsComponent,
    SocietesComponent,
    ChartAreaComponent,
    MotPasseOublierComponent,
    ConnexionComponent,
    InscriptionComponent,
    AcceuilComponent,
    PageNotFoundComponent,
    RolesComponent,
    AutoritiesComponent,
    VisualiserTransactionsComponent,
    VisualiserSocieteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
