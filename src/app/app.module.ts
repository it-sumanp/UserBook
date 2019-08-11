import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighLightPipe } from './highlight.pipe';
import { UserCardComponent } from './user-card/user-card.component';
import { UserBoxComponent } from './user-box/user-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HighLightPipe,
    UserCardComponent,
    UserBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
