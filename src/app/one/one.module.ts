import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one.component';
import { InboxComponent } from '../inbox/inbox.component';
import { InboxsComponent } from './inboxs/inboxs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OneComponent,InboxsComponent],
  exports:[
    OneComponent,InboxsComponent
  ]
})
export class OneModule { }
