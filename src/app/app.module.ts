import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { NewModuleModule } from './new-module/new-module.module';
import { FourModule } from './four/four.module';
import { FiveModule } from './five/five.module';
import { PageSixModule } from './page-six/page-six.module';



@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewModuleModule,
    FourModule,
    FiveModule,
    PageSixModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
