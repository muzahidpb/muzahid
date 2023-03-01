import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apiedit',
  templateUrl: './apiedit.component.html',
  styleUrls: ['./apiedit.component.css']
})
export class ApieditComponent implements OnInit {

  
  

  data: any = ""
  page: number = 1
  jobidforedit: any =""
  jobnameforedit: any =""
  success :any =""
  editable :any = ""
  err :any = ""
  errmassage :any = ""
// ids : any = document.getElementById("demo");

  constructor (private user: ServiceService , private activeroute : ActivatedRoute, private route : Router){
    console.log(this.activeroute.snapshot.queryParams);
    
    this.jobidforedit = this.activeroute.snapshot.queryParams['job_id']
    // this.myform1.value.job_name = this.activeroute.snapshot.queryParams['job_name']
    this.jobnameforedit = this.activeroute.snapshot.queryParams['job_name']
    if (this.activeroute.snapshot.queryParams['job_id']){
      this.editable = true
    }
  //  this.setuser()
    
  }

 

  ngOnInit() {
    // this.jobidforedit = this.jobidforedit
    // this.myform1.value.job_name = this.
    // this.jobidforedit = this.activeroute.snapshot.queryParams['job_id']
    // this.jobnameforedit = this.activeroute.snapshot.queryParams['job_name']
    console.log("hello");
    
  }

  myform1: any = new FormGroup({
    job_name: new FormControl('', Validators.required)
  })

  get validate() {
    return this.myform1.get("job_name")
  }

  editjob(d: any) {
    // this.route.navigate(['editdata'],{
     
    this.errmassage = ""
    let mydata = d.target.value

    // this.data.data.list.filter((data: any) => {
    //   this.editable = true
    //   // console.log(data);
    //   if (data.job_id === mydata) {
    //     // console.log(data);
    //     this.jobidforedit = data.job_id
    //     this.jobnameforedit = data.job_name
    //   }
    // })
    


  }

  

  postediteddata (e :any){
    // if (this.editable){
      let name :any = document.getElementById("demo")
      let job_name :any = name.value
      let id :any = e.target.value
      let vid :any = document.getElementById("demo")
      // console.log(vid);
      
      // if (this.ids.length == this.ids.length) {
      //   this.errmassage = "please make some change "
      // }else {

        this.user.editdata(id, {job_name : job_name}).subscribe((r:any)=>{
          if(this.jobidforedit){
    
            if (r.success){
              this.route.navigate(['api'])
              this.myform1.reset()
              this.jobidforedit = ""
              this.jobnameforedit = ""
              this.success = true
              this.err = false
              // this.getuser()
            } 
            // else if (!r.headers.ok){
            //   this.err = true
            // }
              
            else {
              this.success = false
              this.err =true
            }
          }
          else {
            this.errmassage = "please select any job for edit "
          }
          console.log(r);
          
        })
      }
    // }
    // else {
    //   this.errmassage = "please select any job for edit "
    // }
  // }


}
