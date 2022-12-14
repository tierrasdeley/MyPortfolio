import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material Imports
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { SkillsComponent } from './skills/skills.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { SocialComponentComponent } from './social-component/social-component.component';
import { ProjectsComponent } from './projects-component/projects/projects.component';
import { HabilitiesComponent } from './habilities/habilities.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfileComponent,
    InfoComponent,
    SkillsComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    SocialComponentComponent,
    ProjectsComponent,
    HabilitiesComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressSpinnerModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
