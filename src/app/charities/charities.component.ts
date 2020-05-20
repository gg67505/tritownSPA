import { Component, OnInit } from '@angular/core';
import { CharitiesInfo } from '../shared/services/CharitiesInfo';
import { CharitiesService } from '../shared/services/charities.service';

@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.css']
})
export class CharitiesComponent implements OnInit {

  charitiesinfo: CharitiesInfo[] = [];
   
  show: boolean = false;
  openFlyout: boolean = false;
  open = false;
  position = 'left';
  showCloseButton = true;
  showBackdrop = true;
  hideOnBackdropClick = true;

 constructor(private charitiesservice: CharitiesService ) {
 }
 
 charityinfo = new CharitiesInfo();
 ngOnInit() {
   this.charitiesservice.getCharitiesInfo().subscribe((response) => {
     this.charitiesinfo = response;
     console.log("The first charity id is: " + this.charitiesinfo[0].charityId);
     console.log("The first charity name is: " + this.charitiesinfo[0].charityName);
   }) 
 }

 toggleSidebar() {
   console.log('we are in toggleSidebar function');
   this.openFlyout = !this.openFlyout;
   console.log('we are in the bottom of toggleSidebar function');
 }

}
