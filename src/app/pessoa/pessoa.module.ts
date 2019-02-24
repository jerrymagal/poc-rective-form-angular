import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';

import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { PessoaRountingModule } from './pessoa-rounting.module';

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PessoaRountingModule,
    InputTextModule,
    KeyFilterModule,
    TooltipModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    FileUploadModule
  ],
  exports: [
    PessoaRountingModule
  ]
})
export class PessoaModule { }
