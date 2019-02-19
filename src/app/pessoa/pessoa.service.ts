import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${environment.endpoint}/pessoa`);
  }

  buscar(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>('');
  }

  salvar(pessoa: Pessoa): Observable<any> {
    return this.http.post(`${environment.endpoint}/pessoa`, pessoa);
  }
}
