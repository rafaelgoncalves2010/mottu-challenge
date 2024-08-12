import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/inicio.interface';
import { selecionarTodosFavoritos } from 'src/app/pages/favoritos/favoritos.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  favoritos$: Observable<Character[]>;
  isSticky: boolean = false;

  constructor(private router: Router,
    private store: Store) {
    this.favoritos$ = this.store.select(selecionarTodosFavoritos);
  }

  rotaAtiva(route: string): boolean {
    return this.router.url === route;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowScroll = window.pageYOffset;
    this.isSticky = windowScroll > 100; // Ajuste o valor conforme a altura desejada para iniciar o sticky
  }
}
