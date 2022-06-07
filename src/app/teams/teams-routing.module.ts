import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateTeamComponent} from "./create-election/create-team.component";
import {ListTeamComponent} from "./list-election/list-team.component";
import {EditElectionComponent} from "./edit-election/edit-election.component";
import {VotingComponent} from "./voting/voting.component";

const routes: Routes = [
  {path:'create', component: CreateTeamComponent},
  {path: '', component: ListTeamComponent},
  {path:'edit/:id', component: EditElectionComponent},
  {path:'view/:id', component: VotingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
