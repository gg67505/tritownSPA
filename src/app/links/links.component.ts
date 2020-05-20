import { Component, OnInit } from '@angular/core';
import { LinksService } from '../shared/services/links.service';
import { LinkInfo } from '../shared/services/LinkInfo';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

   linksinfo: LinkInfo[] = [];
   
   show: boolean = false;
   openFlyout: boolean = false;
   open = false;
   position = 'left';
   showCloseButton = true;
   showBackdrop = true;
   hideOnBackdropClick = true;

  constructor(private linksservice: LinksService ) {
  }
  
  linkinfo = new LinkInfo();
  ngOnInit() {
    this.linksservice.getLinksInfo().subscribe((response) => {
      this.linksinfo = response;
      console.log("The first link name is: " + this.linksinfo[0].linkName);
      console.log("The first link value is: " + this.linksinfo[0].linkValue);
    }) 
  }

  toggleSidebar() {
    console.log('we are in toggleSidebar function');
    this.openFlyout = !this.openFlyout;
    console.log('we are in the bottom of toggleSidebar function');
  }

}
