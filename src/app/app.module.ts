import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
/*
* Import app routing
*/
import { AppRoutingModule } from './app-routing.module';
/*
* Import dashboard routing
*/
import { Admin } from './dashboard/admin.component';
/*
* import navigation modules
*/
import { Navigation } from './navigation/navigation.component';
import { Left } from './navigation/left/left.component';
import { Right } from './navigation/right/right.component';
/*
* import schedule modules
*/
import { Schedule } from './schedule/schedule.component';
/*
* import events modules
*/
import { Events } from './events/events.component';
/*
* import biographies modules
*/
import { Biographies } from './biographies/biographies.component';
/*
* import content modules
*/
import { Content } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    Admin,
    Navigation,
    Schedule,
    Events,
    Content
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
