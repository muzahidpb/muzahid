import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Header :any = {
    headers: {
      Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w"

    }
  }

  constructor(private http: HttpClient) { }

//  code for get all data
  getdata(page: number) {
    return this.http.get("http://192.168.1.135:5002/api/job" + "?page=" + page, 
      // token : "nvd"
      this.Header
      // headers: {
      //   Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w"
      // }, 
    
    )
  }

  //  to add new job 
  postdata(data: any) {
    console.log( "data "  +data);
   
    data['company_id']= "5d36920f9f0f6f0545a66adc"

   
    
    return this.http.post("http://192.168.1.135:5002/api/job", data ,
// {  
//       headers: {
//         Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w"
//       }
//   }
this.Header
    )
  }

// to delet selacted job 
  deletdata(data: string) {
    console.log( data);
    
    return this.http.delete("http://192.168.1.135:5002/api/job/" + data ,
  //   {
  //     headers: {
  //       Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w"

  //     }
  // }
  this.Header
    )
  }

  // for edit job by job id
editdata(data:any, job_name : any){
  return this.http.put("http://192.168.1.135:5002/api/job/" + data ,job_name,
//   {
//     headers: {
//       Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbiI6ImQ2ZTRiMjIxMDYyMjNlMTZjNWRkMWE3ODBlMjM3Yzg1YTkwN2U4ZTQiLCJjb21wYW55X2lkIjoiNWQzNjkyMGY5ZjBmNmYwNTQ1YTY2YWRjIn0.T6uOeyKDyEAAbQgIEWB_-AZoX3nzHCJrRVTSOv5lApP5yD_TEhC7ZY-4QZZh9HVG8rBT9Js7ZT1vA6Fuww_t6w"

//     }
// },
this.Header
  )
}

// function for attandance data posting
getattendance(mydata:any){
  console.log(mydata);
  return (<any>this.http).post("http://192.168.1.135:5002/api/attendance-request",mydata,
  this.Header
  )
}


}
