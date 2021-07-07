import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ComputadorCrudComponent } from './views/computador-crud/computador-crud.component';
import { ComputadorCreateComponent } from './components/computador/computador-create/computador-create.component';
import { ComputadorDeleteComponent } from './components/computador/computador-delete/computador-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "computador",
    component: ComputadorCrudComponent
  },
  {
    path: "computador/cadastrar",
    component: ComputadorCreateComponent
  },
  {
    path: "computador/remover",
    component: ComputadorDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
