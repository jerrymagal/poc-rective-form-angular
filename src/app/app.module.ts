import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import {TabMenuModule} from 'primeng/tabmenu';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { Comp1Component } from './tabmenu/components/comp1/comp1.component';
import { Comp2Component } from './tabmenu/components/comp2/comp2.component';
import { Comp3Component } from './tabmenu/components/comp3/comp3.component';
import { Comp4Component } from './tabmenu/components/comp4/comp4.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ToastModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
