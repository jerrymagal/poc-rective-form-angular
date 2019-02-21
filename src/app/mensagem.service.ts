import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private service: MessageService) { }

  showError(field: string, erroName: string, validatorValue?: any) {
    this.service.add({
      severity: 'error',
      summary: 'Atenção',
      detail: this.getMessageError(field, erroName, validatorValue),
      life: 5000
    });
  }

  private getMessageError(field: string, erroName: string, validatorValue?: any): string {
    field = field.charAt(0).toUpperCase() + field.slice(1);
    const config = {
      'required': `${field} é obrigatório.`,
      'maxlength': `${field} deve ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'minlength': `${field} deve ter no mínimo ${validatorValue.requiredLength} caracteres.`,
    };
    return config[erroName];
  }
}
