import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import  dayGridPlugin from '@fullcalendar/daygrid';
import { EventInfo } from '../shared/services/EventInfo';
import { EventsService } from '../shared/services/events.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @ViewChild('detail', {static: false}) detail: { nativeElement: any; };
  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent; // the #calendar in the template

  showModal: boolean;
  calendarApi: any;
  eventtitle = '';
  eventdate = '';
  eventstart: String;
  eventdetail = '';
  eventsinfo: EventInfo[] = [];
  calendarEvents: EventInput[] = [];
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin];
  calendarWeekends = true;
  currentmonth: string;

  show: boolean = false;
  openFlyout: boolean = false;
  open = false;
  position = 'left';
  showCloseButton = true;
  showBackdrop = true;
  hideOnBackdropClick = true;


  constructor(private eventsservice: EventsService, private router: Router) { 
   
  }
    
  ngOnInit() {
  }
  
  goPrev() {
    console.log('in goPrev');
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.prev(); // call a method on the Calendar object
    calendarApi.setOption("showNonCurrentDates", false);
    
    const currentmonth = this.getMonth();
    this.getEventsByMonth(currentmonth);  
  }
  
    goNext() {
    console.log('in goNext');
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.next(); // call a method on the Calendar object
    calendarApi.setOption("showNonCurrentDates", false);
    const currentmonth = this.getMonth();
    console.log('the month prior to the service call is: '+ currentmonth);
    this.getEventsByMonth(currentmonth);
  }
  
  getEventsByMonth(eventmonth: string) {
     console.log('in getEventsByMonth, the month is: ' + eventmonth);
    this.eventsservice.getEventsByMonth(eventmonth).subscribe((response) => {
      this.eventsinfo = response;
      this.loadEvents();  // have to load the events inside the subscribe which will
                          // guarantee the response returns
    })
    
 }
  
  loadEvents(){
    console.log('in loadEvents()');
    let i: number = 1;
    const calendarApi = this.calendarComponent.getApi();
    this.calendarEvents = [];
    
    while(i <= this.eventsinfo.length){
      console.log('creating a calander event.  the event date is: ' + this.eventsinfo[i].eventDate);
      this.calendarEvents = this.calendarEvents.concat({ 
        id: i,
        title: this.eventsinfo[i].eventLink,
        start: this.eventsinfo[i].eventDate,
        date: this.eventsinfo[i].eventDate,
        detail: this.eventsinfo[i].eventDetail
      })
      console.log('the event date is: ' + this.eventsinfo[i].eventDate);
       i++;
    }
    this.calendarEvents.push;  
  }

    handleEventClick(arg: { event: any}) {
      console.log('we are in handleEventClick.  The id is: ' + arg.event.id);
      console.log('we are in handleEventClick.  The event detail is: ' + arg.event.extendedProps.detail);
      this.eventtitle = 'Event Title: ' + arg.event.title;
      this.eventstart =  arg.event.start;
      this.eventdetail = arg.event.extendedProps.detail;
      this.eventstart = String(this.eventstart).substr(0,15);
           
    }
    getMonth() {
      console.log('in getMonth');
      const calendarApi = this.calendarComponent.getApi();
      let monthvalue = calendarApi.getDate().getMonth().toString();

      switch (monthvalue) {
      case '0':
        monthvalue = 'january';
        break;
      case '1':
        monthvalue = 'february';
        break;
      case '2':
        monthvalue = 'march';
        break;
      case '3':
        monthvalue = 'april';
        break;
      case '4':
        monthvalue = 'may';
        break;
      case '5':
        monthvalue = 'june';
        break;
      case '6':
        monthvalue = 'july';
        break;
      case '7':
        monthvalue = 'august';
        break;
      case '8':
        monthvalue = 'september';
        break;
      case '9':
        monthvalue = 'october';
        break;
      case '10':
        monthvalue = 'november';
        break;
      case '11':
        monthvalue = 'december';
        break;
      }
      console.log("the month is: " + monthvalue);
      return monthvalue;
    }

    toggleVisible() {
      this.calendarVisible = !this.calendarVisible;
    }

    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends;
    }

    gotoPast() {
      let calendarApi = this.calendarComponent.getApi();
      calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
    }

    handleDateClick(arg: { dateStr: string; date: any; allDay: any; }) {
      if (confirm('Would you like to add an event calendarComponentto ' + arg.dateStr + ' ?')) {
        this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    }
/*
    menuClose(){
      console.log('we are in menuClose function');
      let calendarApi = this.calendarComponent.getApi();
      calendarApi.render();
      console.log('we are in the bottom of menuClose function');
    }

    toggleSidebar() {
      console.log('we are in toggleSidebar function');
      let calendarApi = this.calendarComponent.getApi();
      calendarApi.destroy();
      this.openFlyout = !this.openFlyout;
      console.log('we are in the bottom of toggleSidebar function');
    }
  */
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
