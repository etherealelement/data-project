import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'project',
    loadComponent: () =>
      import('./components/project-info/project-info.component').then(
        (item) => item.ProjectInfoComponent
      ),
  },
  {
    path: 'textfield',
    loadComponent: () =>
      import('./components/textfield/textfield.component').then(
        (item) => item.TextfieldComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
