import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { TritowncruiseinfoService } from '../shared/services/tritowncruiseinfo.service';
import { CruiseInfoResponse } from '../shared/services/CruiseInfoResponse';
import { MessageInfo } from '../shared/services/MessageInfo';
import { MessagesService } from '../shared/services/messages.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   cruisedate = '';
   cruiselocation = '';
   cruisetime = '';
   cruisestatus = '';
   messagesinfo: MessageInfo[] = [];
   show: boolean = false;
   openFlyout: boolean = false;

   open = false;
   position = 'left';
   showCloseButton = true;
   showBackdrop = true;
   hideOnBackdropClick = true;
 
  constructor(private tritowncruiseservice: TritowncruiseinfoService, private messagesservice: MessagesService ) {
  }
  //cruiseinforesponse: CruiseInfoResponse;
  cruiseinforesponse = new CruiseInfoResponse;
  messageinfo = new MessageInfo();
  ngOnInit() {
      this.tritowncruiseservice.getCruiseInfo().subscribe((response) => {
      this.cruiseinforesponse = response;
      this.cruisedate = this.cruiseinforesponse.cruiseDate;
      this.cruiselocation = this.cruiseinforesponse.cruiseLocation;
      this.cruisetime = this.cruiseinforesponse.cruisetime;
      this.cruisestatus = this.cruiseinforesponse.cruiseStatus;
      if(this.cruisestatus==='ON!'){
        this.show = true;
      }
      else{
        this.show = false;
      }
    })

    this.messagesservice.getMessagesInfo().subscribe((response) => {
      this.messagesinfo = response;
      console.log("The first message text value is: " + this.messagesinfo[0].messageText);
      console.log("The first message link value is: " + this.messagesinfo[0].messageLink);
    }) 

  }

  toggleSidebar() {
    console.log('we are in toggleSidebar function');
    this.openFlyout = !this.openFlyout;
    console.log('we are in the bottom of toggleSidebar function');
  }


}

