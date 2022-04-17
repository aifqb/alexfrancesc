import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HistoriaComponent } from './pages/historia/historia.component';

const routes: Routes = [

  { path: 'inicio', component: InicioComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', redirectTo: 'inicio'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
