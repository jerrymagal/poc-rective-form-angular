import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MensagemService } from 'src/app/mensagem.service';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor(private mensagem: MensagemService) { }

  isValid(formulario: FormGroup): boolean {
    if (formulario.valid) {
      return true;
    }
    this.validarFormulario(formulario);
    return false;
  }

  private validarFormulario(form: FormGroup): void {
    Object.keys(form.controls).forEach(campo => {
      const controle = form.get(campo);
      controle.markAsDirty();
      for (const erro in controle.errors) {
        if (controle.errors.hasOwnProperty(erro)) {
          this.mensagem.showError(campo, erro, controle.getError(erro));
        }
      }
      if (controle instanceof FormGroup) {
        this.validarFormulario(controle);
      }
    });
  }
}
