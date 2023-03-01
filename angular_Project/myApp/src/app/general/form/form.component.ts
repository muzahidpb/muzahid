import { Component } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  myform : any = new FormGroup({
    name : new FormControl(null,[Validators.required]),
    surname : new FormControl('',[Validators.required]),
    contactdetail : new FormControl('',[Validators.required])
  })

  userdata(){
      console.log(this.myform.value);

  }

  get valid(){
    return this.myform.get('name')
  }
  get num (){
    return this.myform.get("contactdetail")
  }
  get sname () {
    return this.myform.get("surname")
  }

}
