import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateUserComponent} from "./create-user/create-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  {path:'create', component: CreateUserComponent},
  {path: '', component: ListUserComponent},
  {path:'edit/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
