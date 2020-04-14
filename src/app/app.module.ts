import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppEffects } from './store';
import { AppComponent } from './app.component';
import { actionReducer } from './root.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(actionReducer),
    EffectsModule.forRoot([AppEffects]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
