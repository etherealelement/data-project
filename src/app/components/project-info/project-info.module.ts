import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectInfoComponent } from './project-info.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { CommonModule } from '@angular/common';
import { ProjectInfoListComponent } from './project-info-list/project-info-list.component';
import { ProjectInfoDescriptionComponent } from './project-info-description/project-info-description.component';
const routes: Routes = [{ path: '', component: ProjectInfoComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    ProjectInfoComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectInfoListComponent,
    ProjectInfoDescriptionComponent,
  ],
})
export class ProjectInfoRoutingModule {}
