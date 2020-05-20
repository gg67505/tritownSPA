import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../shared/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    images = [];
    myForm = new FormGroup({
      eventddate: new FormControl('', [Validators.required]),
      eventdetail: new FormControl('', [Validators.required]),
      pic: new FormControl('', [Validators.required]),
      //fileSource: new FormControl('', [Validators.required])
    });
    show: boolean = false;
    openFlyout: boolean = false;
    open = false;
    position = 'left';
    showCloseButton = true;
    showBackdrop = true;
    hideOnBackdropClick = true;

  constructor(private uploadservice: UploadService ) { }
  ngOnInit() {
  }
   
  get f(){
    return this.myForm.controls;
  }
   
  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
   
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result); 
   
                   this.myForm.patchValue({
                      fileSource: this.images
                   });
                }
  
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }
    
  submit(){
    console.log(this.myForm.value);
    /*this.http.post('http://localhost:8001/upload.php', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })*/
      //this.uploadservice.postFile(this.myForm.) => {
        
        
     // }) 
  }
  toggleSidebar() {
    console.log('we are in toggleSidebar function');
    this.openFlyout = !this.openFlyout;
    console.log('we are in the bottom of toggleSidebar function');
  }
}
