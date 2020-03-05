import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';

const routes: Routes = [
  {path: 'produtos', component: ListaprodutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
