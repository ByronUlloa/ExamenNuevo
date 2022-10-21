
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'sign',
    loadChildren: () => import('./pages/sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
