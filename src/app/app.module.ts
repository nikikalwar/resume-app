import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './components/name/name.component';
import { CareerComponent } from './components/career/career.component';
import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';
import { EducationComponent } from './components/education/education.component';
import { RelevantSkillsComponent } from './components/relevant-skills/relevant-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    CareerComponent,
    ProfessionalExperienceComponent,
    EducationComponent,
    RelevantSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
