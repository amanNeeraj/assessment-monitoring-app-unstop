import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { LibraryComponent } from './library/library.component';
import { RoundStatusComponent } from './round-status/round-status.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BodyComponent } from './body/body.component';
import { NewAssessModalComponent } from './new-assess-modal/new-assess-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssessmentComponent,
    LibraryComponent,
    RoundStatusComponent,
    NavigationComponent,
    BodyComponent,
    NewAssessModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
