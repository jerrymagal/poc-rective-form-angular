import { PessoaService } from './../../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormValidatorService } from 'src/app/form-validator.service';

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
    private route: ActivatedRoute,
    private formValidator: FormValidatorService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.service.buscar(Number(id)).subscribe(pessoa => this.formulario.patchValue(pessoa));
    }

    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.maxLength(5)]],
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
    if (this.formValidator.isValid(this.formulario)) {
      this.service.salvar(this.formulario.value).subscribe(data => console.log(data));
    }
  }
}
