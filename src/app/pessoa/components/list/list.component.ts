import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../pessoa.service';
import { Pessoa } from '../../pessoa';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: PessoaService) { }

  pessoas: Pessoa[];

  ngOnInit() {
    this.service.listar().subscribe(pessoas => this.pessoas = pessoas);
  }

}
