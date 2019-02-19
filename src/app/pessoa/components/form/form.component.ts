import { PessoaService } from './../../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: PessoaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.service.buscar(Number(id)).subscribe(pessoa => this.formulario.patchValue(pessoa));
    }

    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      idade: [null, Validators.required],
      endereco: this.formBuilder.group({
        rua: [null, Validators.required],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  salvar(): void {
    if (!this.formulario.valid) {
      this.validarFormulario(this.formulario);
    } else {
      this.service.salvar(this.formulario.value).subscribe(data => console.log(data));
    }
  }

  private validarFormulario(form: FormGroup): void {
    Object.keys(form.controls).forEach(campo => {
      const controle = form.get(campo);
      if (controle instanceof FormGroup) {
        this.validarFormulario(controle);
      }
    });
  }
}
