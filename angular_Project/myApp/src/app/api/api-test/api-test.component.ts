import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent {

  data: any = ""
  page: number = 1
  jobidforedit: any = false
  jobnameforedit: any = ""
  success :any =""
  editable :any = ""
  err :any = ""
  errmassage :any = ""
  // mydata :any = this.data.data
  constructor(private user: ServiceService, private route : Router) {
    this.getuser()


  }

  myform1: any = new FormGroup({
    job_name: new FormControl('', Validators.required)
  })

  getuser() {
    this.user.getdata(this.page).subscribe((res) => {
      this.data = res
      // console.log(res);
    })
  }
  prev() {
    //  this.data = this.data.data.list.slice(2,6)
    // console.log(this.data.data.list);
    this.page -= 1
    this.getuser()

  }
  next() {
    // console.log("next is called");
    this.page += 1
    this.getuser()
  }                 
   
  get validate() {
    return this.myform1.get("job_name")
  }

  async deletuser(e: any) {
    console.log(e.target.value);
    await this.user.deletdata(e.target.value).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.getuser()
      }
      else {
        this.getuser()

      }
    })

  }

  da:any = {
    name : "muzahid ",
    lname : "vakaliya"
  }

  editjob(d: any) {
    
    this.errmassage = ""
    let mydata = d.target.value
    this.data.data.list.filter((data: any) => {
      this.editable = true
      // console.log(data);
      if (data.job_id === mydata) {
        
        // console.log(data);
        this.jobidforedit = data.job_id
        this.jobnameforedit = data.job_name
        this.route.navigate(['editdata'],{
      queryParams : {
        job_id :this.jobidforedit,
        job_name :this.jobnameforedit
      }
    })
      }
    })
    


  }
  postediteddata (){
    if (this.editable){
      
      this.user.editdata(this.jobidforedit, this.myform1.value).subscribe((r:any)=>{
        if(this.jobidforedit){
  
          if (r.success){
            this.myform1.reset()
            this.jobidforedit = ""
            this.jobnameforedit = ""
            this.success = true
            this.getuser()
          }
          else if (!r.headers.ok){
            this.err = true
          }
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
    else {
      this.errmassage = "please select any job for edit "
    }
  }



  lang: string = ''

  handleChange(e: any) {
    let data = e.target.value;
    this.lang = data

  }

  stateData: string[] = ["gujarat", "rajastan", "delhi", "up", "bihar", "mp"]


}

