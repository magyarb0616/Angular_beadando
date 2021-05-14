import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {AddComponent} from "./add/add.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: 'List',
    component: ListComponent
  },
  {
    path: 'Edit',
    component: EditComponent
  },
  {
    path: 'Add',
    component: AddComponent
  },
  {
    path: "Login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
