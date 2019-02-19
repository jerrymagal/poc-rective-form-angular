import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private service: MessageService) { }

  showError(msg: string, type: string) {

  }
}
