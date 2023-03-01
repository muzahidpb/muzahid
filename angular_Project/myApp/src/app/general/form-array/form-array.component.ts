import { Component } from '@angular/core';
import { FormArrayName, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  constructor() {
this.data()

  }

  //  form group with form array
  myform: any = new FormGroup({
    field: new FormArray([
      new FormControl(null, [Validators.required,Validators.email])
    ])
  })

  //  function for add custom input field
  addField() {
    this.myform.get("field").push(new FormControl(null, Validators.required))
  }

  //  get function for custome field validation 
  get validate() {
    return this.myform.get("field")
  }

  delet(index: any): void {
   
    if (confirm("aru you sure to delet") == true){
    this.myform.get('field').controls.splice(index, 1)
    }
  }

data (){
  console.log(this.myform);
}
  // function for submit data 
  submit() {
    
    console.log(this.myform.value.field);
    this.myform.reset()
  }
}
