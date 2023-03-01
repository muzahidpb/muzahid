import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {


  getdata (data : any){
    console.log(data.form.value);
    

  }


}
