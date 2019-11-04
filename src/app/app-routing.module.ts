import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'terminos', loadChildren: './pages/terminos/terminos.module#TerminosPageModule' },
  { path: 'recovery-password', loadChildren: './pages/recovery-password/recovery-password.module#RecoveryPasswordPageModule' },
  { path: 'perfil', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'mensajes', loadChildren: './pages/mensajes/mensajes.module#MensajesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
