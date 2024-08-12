import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/inicio.interface';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss']
})
export class PersonagemComponent implements OnInit{

  personagemFavorito = false;
  rotaAtual: string = '';

  @Output()
  personagemFavoritoClicado: EventEmitter<boolean> = new EventEmitter<boolean>()
  
  @Input() 
  personagem: Character | undefined;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.rotaAtual = this.router.url;
  }

  verificarStatusPersonagem() {
    this.personagemFavorito = !this.personagemFavorito;
    this.personagemFavoritoClicado.emit(this.personagemFavorito);
  }
}
