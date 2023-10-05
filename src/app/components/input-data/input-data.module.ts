import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextfieldComponent } from './input-data.component';

const routes: Routes = [{ path: '', component: TextfieldComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextfieldRoutingModule {}
