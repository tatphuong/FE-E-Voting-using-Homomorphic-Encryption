import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCandidateComponent} from "./create-candidate/create-candidate.component";
import {ListCandidateComponent} from "./list-candidate/list-candidate.component";
import {EditCandidateComponent} from "./edit-candidate/edit-candidate.component";

const routes: Routes = [
  {path:'create', component: CreateCandidateComponent},
  {path: '', component: ListCandidateComponent},
  {path:'edit/:id', component: EditCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
