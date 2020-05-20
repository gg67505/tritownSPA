import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent} from './admin/admin.component';
import { CharitiesComponent } from './charities/charities.component';
import { DirectionsComponent } from './directions/directions.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent} from './home/home.component';
import { LinksComponent } from './links/links.component';
import { MembersComponent } from './members/members.component';
import { PicsComponent } from './pics/pics.component';
import { PicsviewComponent } from "./picsview/picsview.component";
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BlankviewComponent } from './blankview/blankview.component';
import { UploadComponent } from './upload/upload.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'charities', component: CharitiesComponent },
  { path: 'directions', component: DirectionsComponent },
  { path: 'events', component: EventsComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'links', component: LinksComponent },
  { path: 'members', component: MembersComponent },
  { path: 'pics', component: PicsComponent },
  { path: 'picsview', component: PicsviewComponent },
  { path: 'blankview', component: BlankviewComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'upload-files', component: UploadFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
