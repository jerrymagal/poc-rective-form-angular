import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../pessoa.service';
import { Pessoa } from '../../pessoa';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: PessoaService, private spinner: NgxSpinnerService) { }

  retorno$: Observable<any>;

  ngOnInit() {
    this.spinner.show();
    this.retorno$ = this.service.listar().pipe(tap(() => this.spinner.hide()));
  }

}
