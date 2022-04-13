import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KanbanModule } from 'smart-webcomponents-angular/kanban';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), KanbanModule],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
