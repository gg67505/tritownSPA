import { Component, OnInit } from '@angular/core';
import { MembersInfo } from '../shared/services/MembersInfo';
import { MembersService } from '../shared/services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  membersinfo: MembersInfo[] = [];
   
  show: boolean = false;
  openFlyout: boolean = false;
  open = false;
  position = 'left';
  showCloseButton = true;
  showBackdrop = true;
  hideOnBackdropClick = true;

 constructor(private membersservice: MembersService ) {
 }
 
 memberinfo = new MembersInfo();
 ngOnInit() {
   this.membersservice.getMembersInfo().subscribe((response) => {
     this.membersinfo = response;
     console.log("The first member name is: " + this.membersinfo[0].memberName);
     console.log("The first member role is: " + this.membersinfo[0].memberRole);
     console.log("The first member email is: " + this.membersinfo[0].memberEmail);
   }) 
 }

 toggleSidebar() {
   console.log('we are in toggleSidebar function');
   this.openFlyout = !this.openFlyout;
   console.log('we are in the bottom of toggleSidebar function');
 }

}
