// console.log("hello in function");

// ----------------------> function and function call

// function app (){
//     console.log("hello from function ");
// }
//  call the function 
// app()
frgtrtyghy56hy6hyh
// -------------------> function with arguments 

// function app (a,b){
//     console.log(a+b);
//     console.log(a*b);
// }

// app(2,4)

// -------------------->function callback

// ------------->the callback function is take function as an argument 

// function app(callback,a){
//       console.log(callback);
//       console.log(a);
// }
// function callbackfn(){
//     return "hello from callback"
// }
// app(callbackfn(),5)


// ---------------------> javascript prototype 

// function app (name, lname){
//     this.name = name
//     this.lname = lname
// }


// let data = new app("muzahid", "vakaliya")
// app.prototype.fullname = "muzahid vakaliya"    

// console.log(data.fullname);

// // now add new property using prototype 

// console.log(data);


//   ------------------------->class

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     newcar (a){
//         console.log(a);
//     }
//   }

//   const myCar = new Car("Ford", 2014);
//   myCar.newcar("bmw")

//   console.log(myCar.name);

//   inheritance in class 

// class Car {
//     constructor(brand) {
//         this.brand = brand
//     }
//     present() {
//         return "i have " + this.brand + "car"
//     }
//     carinfo() {
//         console.log("the car condition is good ");
//     }
// }

// class Model extends Car {
//     constructor(brand, model) {
//         super(brand);
//         this.model = model

//     }
//     show() {
//         return this.present() + " the model is " + this.model
//     }
// }

// let data = new Model("bmw", 2023)
// // console.log(data.carinfo());
// data.carinfo()


//  private in javascript class 

// class myData {
//     #name = "muzahid"
//     #lname = "vakaliy"

//     pmethod (){
//         console.log("this is a private class");
//         console.log(this.#name + this.#lname);
//     }
// }

// class Child extends myData {
//     info (){
//         console.log(name);
//     }
// }

// let data = new myData()
// console.log(data.pmethod());


// ------------------static method in class 

// we can not access static method for class object 


// class Car {
//     static info (){
//         console.log("this is a static method");
//     }
// }

// let data = new Car ()
// // data.info()   // this is show an error 
// Car.info() 



// class detail {
//     constructor(name, lname, age) {
//         this.name = name
//         this.lname = lname
//         this.age = age
//     }

//     fulldetail() {
//         return this.name + this.lname + this.age
//     }

// }

// class person extends detail {
//     constructor(name, lname, age) {
//         super(name, lname, age)
//     }
//     persondata() {
//         return this.lname
//     }
// }

// let data = new person("muzahid", "vakaliya", 21)
// console.log(data.fulldetail());
// console.log(data.persondata());


//  super in class 

// class Animal {
//     constructor(lag) {
//         this.lag = lag;

//     }
//     walk() {
//         console.log("walking on " + this.lag + " lag");
//     }
// }

// class bird extends Animal {
//     constructor(lag) {
//         super(lag)
//     }

//     walk() {
//         super.walk()
//         console.log("chile walking on " + this.lag + " lag");
//     }

// }

// let cooke = new bird(2)
// // console.log(cooke);
// cooke.walk()




