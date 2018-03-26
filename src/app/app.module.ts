import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {WtapiService} from './services/wtapi.service';
import {HttpClientModule} from '@angular/common/http';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Angular2FontawesomeModule
  ],
  providers: [WtapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
