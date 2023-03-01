// --------------------> call method

// function add(x, y) {
//     return x + y;
//   }

//   let result = add.call(this, 10, 20);
//   console.log(result); // 30

// var arr = [1,2,3]

// var a = Math.min.apply(this, arr)
// console.log(a);


// let obj = {

//     prnt : function  (city){
//         console.log(this.name + this.lname + "and city is "+ city);
//     }
// }



// let a = {
//     name : "muzahid",
//     lname : " vakaliya "
// }

// let p =obj.prnt.call(a, "morbi")
// console.log(p);

// console.log(new Date().getHours());

// --------------------> now apply method 
// ---------------> th eapply method are same like call method 
// -------> the different is apply method take argument in array   and call method take argument sapretaly 

// let obj1 = {
//     prnt : function (state ){
//         console.log(this.name + this.lname + " and state is " + state);
//     }
// }


// let data = {
//     name : "muzahid ",
//     lname  :" vakaliya"

// }
// obj1.prnt.apply(data, ["gujart "])


// ----------------------- > now bind
// ------------> the bind is use to call diferent object function in different object 

// /////////////// example important 

// let obj = {
//     name: "muzahid ",
//     lname: "vakaliya ",
//     prnt: function (name) {
//         console.log(this.name + this.lname + name );
//     }
// }

// let obj2 = {
//     name: "muzahid 1 ",
//     lname: "vakaliya 1 "    
// }

// // obj.prnt()

// let a = obj.prnt.bind(obj2, )
// a("ahamad")
//   obj.prnt.call(obj2, "muzahid")

let u = true
u = "name"
console.log("hello");