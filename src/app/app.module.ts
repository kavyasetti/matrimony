import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormComponent } from './forms/form/form.component';
import { MainComponent } from './main/main.component';
import { MyshaadiComponent } from './myshaadi/myshaadi.component';
import { MatchesComponent } from './matches/matches.component';
import { SearchComponent } from './search/search.component';
import { InboxComponent } from './inbox/inbox.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { SHelpComponent } from './s-help/s-help.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyPhotosComponent } from './my-photos/my-photos.component';
import { PartnerPreferenceComponent } from './partner-preference/partner-preference.component';
import { SettingsComponent } from './settings/settings.component';
import { MyShadhiMoreComponent } from './my-shadhi-more/my-shadhi-more.component';
import { OneModule } from './one/one.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    MainComponent,
    MyshaadiComponent,
    MatchesComponent,
    SearchComponent,
    InboxComponent,
    UpgradeComponent,
    SHelpComponent,
    ProfileComponent,
    DashboardComponent,
    MyProfileComponent,
    MyPhotosComponent,
    PartnerPreferenceComponent,
    SettingsComponent,
    MyShadhiMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
