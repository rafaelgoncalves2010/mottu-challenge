import { Component, HostListener, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';
import { ApiResponse, Character } from 'src/app/models/inicio.interface';
import { catchError, debounceTime, delay, distinctUntilChanged, of, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { adicionarFavorito, excluirFavorito } from '../favoritos/favoritos.actions';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  personagens: Array<Character> = [];
  proximaRequisicao: string = '';
  loading: boolean = false;
  campoPesquisar = new FormControl();

  constructor(private inicioService: InicioService,
    private store: Store) { }

  ngOnInit(): void {
    this.carregarPrimeirosPersonagens();
    this.perquisarPersonagemPorNome();
  }

  perquisarPersonagemPorNome() {
    this.campoPesquisar.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name: any) => {
        return this.inicioService.pesquisarPorNome(name).pipe(
          catchError(erro => {
            console.log('Erro ao chamar a API:', erro);
            return of([]);
          }))
      })).subscribe((data: any) => {
        this.personagens = data.results;
        this.loading = false;
      });
  }

  carregarPrimeirosPersonagens() {
    this.inicioService.todosPersonagens().subscribe((res: ApiResponse) => {
      this.personagens.push(...res.results);
      this.proximaRequisicao = res?.info?.next;
    })
  }

  addFavorito(personagem: Character) {
    this.store.dispatch(adicionarFavorito({ personagem }));
  }

  removerFavorito(personagem: Character) {
    const idPersonagem = personagem.id;
    this.store.dispatch(excluirFavorito({ idPersonagem }));
  }

  mudarStatusPersonagem(status: boolean, personagem: Character) {
    if (status) this.addFavorito(personagem)
    else this.removerFavorito(personagem)
  }

  loadItems() {
    if (this.loading) return;

    this.loading = true;
    this.inicioService.proximaPagina(this.proximaRequisicao).pipe(
      delay(2000)
    ).subscribe((res: ApiResponse) => {
      this.personagens.push(...res.results);
      this.proximaRequisicao = res?.info?.next;
      this.loading = false;
    },
      (error) => {
        console.error('Erro ao carregar itens', error);
        this.loading = false;
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.pageYOffset;
    if (scrollPosition >= documentHeight - 2 && (this.campoPesquisar.value == null || this.campoPesquisar.value == '')) {
      this.loadItems();
    }
  }
}


