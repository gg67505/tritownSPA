import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NgImageSliderModule } from 'ng-image-slider';
//import { SliderModule } from 'angular-image-slider';
import {SlideshowModule} from 'ng-simple-slideshow';

import {HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DirectionsComponent } from './directions/directions.component';
import { EventsComponent } from './events/events.component';
import { LinksComponent } from './links/links.component';
import { PicsComponent } from './pics/pics.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { HttpClientModule } from '@angular/common/http';
import {TritowncruiseinfoService} from './shared/services/tritowncruiseinfo.service';
import { from } from 'rxjs';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FlyoutModule } from 'ngx-flyout';
import { PicsviewComponent } from './picsview/picsview.component';
import { BlankviewComponent } from './blankview/blankview.component';
import { MembersComponent } from './members/members.component';
import { CharitiesComponent } from './charities/charities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    DirectionsComponent,
    EventsComponent,
    LinksComponent,
    PicsComponent,
    SponsorsComponent,
    PicsviewComponent,
    BlankviewComponent,
    MembersComponent,
    CharitiesComponent,
    UploadComponent,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //NgImageSliderModule,
    //SliderModule,
    SlideshowModule,
    HttpClientModule,
    NgbModule,
    FullCalendarModule,
    FlyoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TritowncruiseinfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





















