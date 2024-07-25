import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: "", redirectTo:'/home', pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  { path:"todo", component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouteCompArr = [HomeComponent, TodoComponent]