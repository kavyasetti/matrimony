import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './forms/form/form.component';
import { MyshaadiComponent } from './myshaadi/myshaadi.component';
import { MatchesComponent } from './matches/matches.component';
import { SearchComponent } from './search/search.component';
import { InboxComponent } from './inbox/inbox.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {SHelpComponent} from './s-help/s-help.component'
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './forms/signup/signup.component';
import { ForgotComponent } from './forms/forgot/forgot.component';



const routes: Routes = [
  {path:'',redirectTo:'/menu',pathMatch:'full'},
  {path:"login",component:FormComponent},
  {path:"mysaahdi",component:MyshaadiComponent,children: [
    {
      path: 'dashboard', // child route path
      component: DashboardComponent, // child route component that the router renders
    },
    {
      path: 'profile',
      component: ProfileComponent, // another child route component that the router renders
    },
  ],},
  {path:"matches",component:MatchesComponent},
  {path:"search",component:SearchComponent},
  {path:"inbox",component:InboxComponent},
  {path:"upgrade",component:UpgradeComponent},
  {path:"help",component:SHelpComponent},
  {path:"profile",component:ProfileComponent},
  {path:"menu",component:MenuComponent},
  {path:"main",component:MainComponent},
  {path:"signup",component:SignupComponent},
  {path:"forgot",component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
