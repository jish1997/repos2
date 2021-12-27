import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AppRoutingsModule } from './app-routings.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
