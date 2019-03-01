import { TabmenuComponent } from './tabmenu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuModule} from 'primeng/tabmenu';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { TabMenuRountingModule } from './tab-menu-rounting.module';

@NgModule({
  declarations: [TabmenuComponent, Comp1Component, Comp2Component, Comp3Component, Comp4Component],
  imports: [
    CommonModule,
    TabMenuModule,
    TabMenuRountingModule,
  ],
  exports: [TabMenuRountingModule]
})
export class TabmenuModule { }
