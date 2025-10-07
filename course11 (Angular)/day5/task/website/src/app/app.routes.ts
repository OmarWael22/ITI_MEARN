import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import{ Notfound } from './components/notfound/notfound'
import { Mission } from './components/about/mission/mission';
import { Team } from './components/about/team/team';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [
  {path:'home',component : Home , title:'Home'},
  { path: '', redirectTo : 'home' ,pathMatch:'full' },
  { path: 'about', component: About, children : [
    {path :'' , redirectTo : 'mission' , pathMatch : 'full'},
    {path:'mission',component : Mission},
    {path:'team' , component : Team}
  ] },
  { path: 'login', component: Login , title : 'Login' },
  { path: 'dashboard', component: Dashboard , title : 'Dashborad',canActivate: [authGuard] },
  { path: '**', component:Notfound } // fallback
];
