import { TabmenuComponent } from './tabmenu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Comp1Component } from '../tabmenu/components/comp1/comp1.component';
import { Comp2Component } from '../tabmenu/components/comp2/comp2.component';
import { Comp3Component } from '../tabmenu/components/comp3/comp3.component';
import { Comp4Component } from '../tabmenu/components/comp4/comp4.component';

const abasRoutes: Routes = [
  {path: '', component: TabmenuComponent},
  {path: 'comp1', component: Comp1Component, outlet: 'abas'},
  {path: 'comp2', component: Comp2Component, outlet: 'abas'},
  {path: 'comp3', component: Comp3Component, outlet: 'abas'},
  {path: 'comp4', component: Comp4Component, outlet: 'abas'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(abasRoutes)
  ],
  exports: [RouterModule]
})
export class TabMenuRountingModule { }
