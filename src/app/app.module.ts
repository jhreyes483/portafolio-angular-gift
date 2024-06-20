import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** peticiones http */
import { HttpClientModule } from '@angular/common/http';

/* modules */
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, /** peticiones http */

    /** nodules  */
    GifsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
