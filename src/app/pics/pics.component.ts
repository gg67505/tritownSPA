import { Component, OnInit } from '@angular/core';
import { PicsService } from '../shared/services/pics.service';
import { PicsPosting } from '../shared/services/PicsPosting';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {
  picspostings: PicsPosting[] = [];
  show: boolean = false;
  openFlyout: boolean = false;
  open = false;
  position = 'left';
  showCloseButton = true;
  showBackdrop = true;
  hideOnBackdropClick = true;
  tempdate: string = '';
  
  constructor(private picsservice: PicsService) {
   
  }
  picposting = new PicsPosting();
  ngOnInit() {
      this.picsservice.getEntirePicsInventory().subscribe((response) => {
      this.picspostings = response;
     
      // 2018-10-05 sample date from DB
      
      for (var _i = 0; _i < this.picspostings.length; _i++) {
        const firstpart = this.picspostings[_i].picsdate.substr((this.picspostings[_i].picsdate.indexOf('-') + 1), (this.picspostings[_i].picsdate.lastIndexOf('-') - 1)) + '-';
        //console.log('the first part of the date value is: ' + firstpart);
        const secondpart = this.picspostings[_i].picsdate.substr((this.picspostings[_i].picsdate.indexOf('-') + 4), (this.picspostings[_i].picsdate.indexOf('-') + 5)) + '-';
        //console.log('the second part of the date value is: ' + secondpart);
        const thirdpart = this.picspostings[_i].picsdate.substr(0,4);
        //console.log('the third part of the date value is: ' + thirdpart);
        this.picspostings[_i].picsdate = firstpart + thirdpart + '_' + this.picspostings[_i].picsevent;
      }
     

    }) 
  }

  toggleSidebar() {
    console.log('we are in toggleSidebar function');
    this.openFlyout = !this.openFlyout;
    console.log('we are in the bottom of toggleSidebar function');
  }
  
 }



