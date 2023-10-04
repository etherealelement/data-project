import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: () =>
      import('./components/project-info/project-info.module').then(
        (item) => item.ProjectInfoRoutingModule
      ),
  },
  {
    path: 'textfield',
    loadChildren: () =>
      import('./components/textfield/textfield.module').then(
        (item) => item.TextfieldRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
