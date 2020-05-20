import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blankview',
  templateUrl: './blankview.component.html',
  styleUrls: ['./blankview.component.css']
})
export class BlankviewComponent implements OnInit {

  show: boolean = false;
  openFlyout: boolean = false;
  open = false;
  position = 'left';
  showCloseButton = true;
  showBackdrop = true;
  hideOnBackdropClick = true;
  

  constructor(private router: Router) { }
  @ViewChild('slideshow', {static: false}) slideshow: any;

  ngOnInit() {
  }
  
  
  menuClose(){
    console.log('we are in menuClose function');
    
    console.log('we are in the bottom of menuClose function');
  }

  toggleSidebar() {
    console.log('we are in toggleSidebar function');
    //this.router.navigateByUrl("/picsview");
    this.openFlyout = !this.openFlyout;
    console.log('we are in the bottom of toggleSidebar function');
  }
 

}
