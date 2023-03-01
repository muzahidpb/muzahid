// -----------> var 

// var a = "muzahid"

// {
//     console.log(a);
//     // a is access hear 
//     var b = "muzahid 1"
// }
// console.log(b);
//  also b is access hear 

// ------------------->var is function scope 
// function fn (){
//     var c = "mzahid in function"
// }

// console.log(c);  // c can not be access hear 

// var a = "my app"
// var a = "my app 2"
// console.log(a)

// ------------------------>let keyword es6 

// let b = "muzahid"
// let c;
// c= "muzahid 2"
// const  c  = "muzahid 3"

// console.log(b)
// console.log(c)

//  ------------------> let is a block scope 

// {
//     let a = "muzahie"
// }
// console.log(a);  // a can not be access hear 

// ------------------------------- const 
// -------------------------------> const is also block scope 


// const d = "muzahid 4"
// console.log(d);

// const e;
// e="muzahid 5"
// console.log(e);   this is show an error 

// --------------------------------------> arrow funcion 

// var f = ()=>{
//     console.log("hello world from arrow function ");
// }
// f()

//  --------------------------------------------->arrow function with only one statenment  
// var f = ()=> console.log("hello world from arrow function");

//  ---------------------------------------------->arrow function no argument object 

// const f = (a)=>{
//     var a = argument[0];
//     console.log(a);
// }

// f(5)

// ------------------------------------------------>in normal function argument object 

// function f (...a){
//     var a = arguments[0][1]
//     console.log(a);
// }
// f([5,4])

// --------------------------------->no constructure in arrow function 

// const f =(name,lname)=>{
//     this.name =name;
//     this.lname = lname
// }

// var a = new f("muzahid", "vakaliya")
// console.log(a);

//   error : f is not a constructure 

// -------------------------->in normal function 

// function f(name , lname){
//     this.name = name
//     this.lname = lname
// }
// var a = new f("muzahid", "vakaliy")
// console.log(a);

// --------------------------->  this keyword in arrow function
//  ------> arow function not their own this its use their parent function or component this  i.e 

// function f() {
//      name = "muzahid"
//     const af = ()=>console.log(this.name);
//     af()
// }

// const name = "muzahid"

// const f = ()=>{
//     console.log(this.name);
//     console.log(this.lname);
// }

console.log("hello");