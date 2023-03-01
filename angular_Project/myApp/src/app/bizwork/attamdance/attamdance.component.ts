import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-attamdance',
  templateUrl: './attamdance.component.html',
  styleUrls: ['./attamdance.component.css']
})
export class AttamdanceComponent {

  constructor(private user: ServiceService) {
  }

  success: any = ""
  err: any = ""

  // code for get form data and validate form
  myform: any = new FormGroup({
    date: new FormControl('', Validators.required),
    in_time: new FormArray([

    ]),
    out_time: new FormArray([

    ]),
    log_type: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required)
  })




  //  function for post data in api
  Handlepost() {
    if (this.myform.invalid) {
      alert("please cheak form")
    }
    else {
      if (this.myform.value.in_time == "" || this.myform.value.in_time == "") {
        this.err = true
      } else {
        let puncharr: any = []
        for (let i = 0; i < this.myform.value.in_time.length; i++) {
          puncharr.push({ attendance_type: this.myform.value.log_type, attendance_datetime: this.intimecall(i) })
        }
        for (let i = 0; i < this.myform.value.out_time.length; i++) {
          puncharr.push({ attendance_type: this.myform.value.log_type, attendance_datetime: this.outtimecall(i) })
        }

        console.log("date", this.myform.value.date + this.myform.value.in_time)
        let postobj: any = {
          log_type: this.myform.value.log_type,
          punch: puncharr,
          reason: this.myform.value.reason,
          user_id: "620a423ef63cee0008ef41b6"
        }

        this.postapidata(postobj)
        this.myform.reset()
      }

    }
  }

  // function for get date formate for api 
  intimecall(i: any) {
    let new_s: string = this.myform.value.in_time[i]

    let hr = new_s.split(":")

    let year = this.myform?.value.date.split('-')
    let date = new Date().setHours(parseInt(hr[0]), parseInt(hr[1]), 0, 0)

    date = new Date(date).setFullYear(parseInt(year[0]), parseInt(year[1]) - 1, parseInt(year[2]))

    return this.getDate(date)
  }

  // function for get date formate for api 
  outtimecall(i: any) {
    let new_s: string = this.myform?.value.out_time[i]

    let hr = new_s.split(":")

    let year = this.myform.value.date.split('-')
    let date = new Date().setHours(parseInt(hr[0]), parseInt(hr[1]), 0, 0)

    date = new Date(date).setFullYear(parseInt(year[0]), parseInt(year[1]) - 1, parseInt(year[2]))

    return this.getDate(date)
  }

  //  function for add in time field
  addintime() {
    this.myform.get("in_time").push(new FormControl('', Validators.required))
  }
  //  function for add out time field
  addouttime() {
    this.myform.get("out_time").push(new FormControl('', Validators.required))
  }

  //  function for delet in tim efield
  deletintime(i: any) {
    this.myform.get("in_time").controls.splice(i, 1)
  }

  //  function for delet out tim efield
  deletouttime(i: any) {
    this.myform.get("out_time").controls.splice(i, 1)
  }

  // function for api 
  postapidata(myobj: any) {
    this.user.getattendance(myobj).subscribe((res: any) => {
      console.log(res);
      this.success = true
      this.err = false

    })
  }

  //  get date in 
  getDate(date: any) {
    return moment(new Date(date)).format("YYYY-MM-DDTHH:mm:ss.sssZ");

  }

}
