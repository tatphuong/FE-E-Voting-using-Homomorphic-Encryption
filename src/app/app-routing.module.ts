import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'elections',
    loadChildren: () => import('./teams/teams.module').then(module => module.TeamsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(module => module.UsersModule)
  },
  {
    path: 'candidates',
    loadChildren: () => import('./candidates/candidates.module').then(module => module.CandidatesModule)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

