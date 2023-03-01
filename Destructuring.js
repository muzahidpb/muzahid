// console.log("hello world");

// ---------------------> array simple destructuring

// var arr = [4,3,35,6,7]

//  ----------------->without destructuring 
// console.log(arr[0]);

// ----------------->with destructuring  

// var [a,b,c,d] = arr
// console.log(a);

// -----------------------> simple destructuring object 

// var obj = {
//     name : "muzahid",
//     lname : "vakaliya"
// }
// var {name , lname } = obj
// console.log(name);              // with destructuring   output : muzahid

// console.log(obj.name);            // without destructuring  output : muzahid


// const obj = { a: 1, b: { c: 2 } };
// const { a } = obj; // a is constant
// var { 
//     b: { c: d },
// } = obj;

// console.log(d);

// -------------- >  destructuring in function 

// function app (a,b) {
//      const add = a+b
//      const sub = a-b
//      const sum = a*b
//      return [add, sub, sum]
// }

// const [add, sub, sum ] = app(5,4)
// console.log(add);
// console.log(sub);
// console.log(sum);


// --------------------destructuring in object and function 

// var obj = {
//     name : "muzahid",
//     lname : "vakaliya",
//     address : "morbi",
//     age : "21",
//     gender : "male"
// }

// function app ({name, lname, age, address}){
//     console.log("my name is " + name + lname +"and age is " + age + " and i am from " + address);
// }
// app(obj)


// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     registration: {
//       city: 'Houston',
//       state: 'Texas',
//       country: 'USA'
//     }
//   }

//   function data ({model , brand , registration : {state, city}}){
//           console.log("the car is " + brand + " model is " + model +" and egistration city " + city +" and state " + state);
//   }

// data(vehicleOne)






