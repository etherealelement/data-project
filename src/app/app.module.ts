import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextfieldComponent,
    ProjectInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
