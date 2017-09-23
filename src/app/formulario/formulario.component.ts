import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vingador } from '../vingador';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input()
  novo: Vingador;

  constructor() { }

  ngOnInit() {
  }

  @Output()
  onCadastrar = new EventEmitter<Vingador>();

  cadastrar(): void {
    this.onCadastrar.emit(this.novo);
}

}
