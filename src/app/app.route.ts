import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


export const routes: Routes = [
    { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
    {
        path: 'inicio',
        loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule)
    },
    {
      path: 'favoritos',
      loadChildren: () => import('./pages/favoritos/favoritos.module').then(m => m.FavoritosModule)
  },
    { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }