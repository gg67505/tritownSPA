import { Component, OnInit, ViewChild } from '@angular/core';
import { PicsService } from '../shared/services/pics.service';
import { NgImageSliderComponent } from 'ng-image-slider';
import { IImage } from 'ng-simple-slideshow';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-picsview',
  templateUrl: './picsview.component.html',
  styleUrls: ['./picsview.component.css']
})
export class PicsviewComponent implements OnInit {

  show: boolean = false;
  openFlyout: boolean = false;
  open = false;
  position = 'left';
  showCloseButton = true;
  showBackdrop = true;
  hideOnBackdropClick = true;
  piclist: String[] = [];
  eventdate: string = '';
  //imageSources: String[] = [];
  imageSources: (string | IImage)[] = [];

  constructor(private picsservice: PicsService, private route: ActivatedRoute, private router: Router) { }
  @ViewChild('slideshow', {static: false}) slideshow: any;

  ngOnInit() {
    this.eventdate = this.route.snapshot.queryParamMap.get('eventdate');
    console.log('The query params are: ' + this.eventdate);
    this.picsservice.getPicListForSingleEvent(this.eventdate).subscribe((response) => {
      this.piclist = response;
      console.log('The piclist length is: '+ this.piclist.length);

      const picviewurl = environment.apiBaseUrl + 'getImageWithMediaType?eventdate=' + this.eventdate + '&picname=';   

      const  fullurl = picviewurl + this.piclist[0];
          
      for (var _i = 0; _i < this.piclist.length; _i++) {
        const urlvalue = picviewurl + this.piclist[_i];
        this.imageSources[_i] = {url: urlvalue, caption: 'Test Caption', href: '#config'};
      }
    })
  }
  
  getPicListForSingleEvent(picdate: string) {
    console.log('in getPicListForSingleEvent, the picdate is: ' + picdate);
    this.picsservice.getPicListForSingleEvent(picdate).subscribe((response) => {
    this.piclist = response;
    console.log('The piclist length is: '+ this.piclist.length);
    })
  }

  menuClose(){
    console.log('we are in menuClose function');
    
    console.log('we are in the bottom of menuClose function');
  }

  toggleSidebar() {
    console.log('we are in toggleSidebar function');
    this.router.navigateByUrl("/blankview");
    this.openFlyout = !this.openFlyout;
    console.log('we are in the bottom of toggleSidebar function');
  }
 

}
