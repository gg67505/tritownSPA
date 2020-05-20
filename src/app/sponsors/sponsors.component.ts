import { Component, OnInit } from '@angular/core';
import { SponsorsService } from '../shared/services/sponsors.service ';
import { SponsorInfo } from '../shared/services/SponsorInfo';

@Component({
  selector: 'app-links',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

   sponsorsinfo: SponsorInfo[] = [];
   
   show: boolean = false;
   openFlyout: boolean = false;
   open = false;
   position = 'left';
   showCloseButton = true;
   showBackdrop = true;
   hideOnBackdropClick = true;

  constructor(private sponsorsservice: SponsorsService ) {
  }
  
  linkinfo = new SponsorInfo();
  ngOnInit() {
    this.sponsorsservice.getSponsorsInfo().subscribe((response) => {
      this.sponsorsinfo = response;
      console.log("The first sponsor name is: " + this.sponsorsinfo[0].sponsorName);
      console.log("The first sponsor street address is: " + this.sponsorsinfo[0].sponsorStreetAddress);
      console.log("The first sponsor city state zip is: " + this.sponsorsinfo[0].sponsorCityStateZip);
      console.log("The first sponsor link is: " + this.sponsorsinfo[0].sponsorLink);
    }) 
  }

  toggleSidebar() {
    console.log('we are in toggleSidebar function');
    this.openFlyout = !this.openFlyout;
    console.log('we are in the bottom of toggleSidebar function');
  }

}
