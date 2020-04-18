import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {ConexionService} from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
