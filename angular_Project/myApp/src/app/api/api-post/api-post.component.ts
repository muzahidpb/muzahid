import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.css']
})
export class ApiPostComponent {

  constructor(private userdata: ServiceService) {

  }

  response: any = ""
  success: any = ""
  error: any = ""

  myform: any = new FormGroup({
    job_name: new FormControl('', Validators.required)
  })

  mdata = {
    job_name: this.myform.value.job_name,
    // job_name: 'his.myform.value.job_name',
    company_id: '5d36920f9f0f6f0545a66adc'
  }

  get validate() {
    return this.myform.get("job_name")
  }

  handledelet(data: any) {
    this.userdata.deletdata(this.myform.value).subscribe((res) => {
      console.log(res);

    })
  }

  handleSubmit() {
    console.log(this.myform.value);
    this.userdata.postdata(this.myform.value).subscribe(async (res: any) => {
      console.log(res);
      this.response = res
      if (res.success) {
        this.success = true
      } else {
        // alert(res.error[0].job_name)
        this.success = false
        this.error = res.error[0].job_name
      }
    }
    )

    // if (r.success) {
    //   alert("success")
    // } else {
    //   alert("err")
    // }

    this.error = this.response.success
    // console.log(this.response.success);



    this.myform.reset()
    // if (this.response.success){
    //   // this.error = true
    //   alert("data added")

    // }
    // else {
    //   // this.err = false
    //   alert(this.response.error[0].job_name)

    // }
    //  await this.myalert()s

  }


  //  async myalert(){
  //   if (this.response.success){
  //     alert("data added")
  //   }
  //   else {
  //     alert(this.response.error[0].job_name)
  //   }
  // }

  datas = [
    { name: "muzahid" },
    { name: "mohammad" },
    { name: "salman" },
    { name: "aryan" }
  ]


}
