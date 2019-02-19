import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

const pessoasRoutes: Routes = [
  {path: '', component: ListComponent},
  {path: 'form', component: FormComponent},
  {path: 'form/:id', component: FormComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pessoasRoutes)
  ],
  exports: [RouterModule]
})
export class PessoaRountingModule { }
