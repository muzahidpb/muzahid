// --------------------> spread syntex 

// function sum (x,y,z){
//     return x + y + z
// }

// let number = [1,2,3]

// console.log(sum(...number)); //output 6 

//  ------------------ spread use in function call 
// ------------------spread operator is do a copy value of array 

//  ------------> rest syntex 

//  -------------rest is use when function define 

// function  f(...a)
// {
//     for (let i = 0; i<a.length; i++){
//         console.log(a[i]);
//     }
// }
// f(1,2,3,4,5) 

// spread in copy for array 

// var a = [ "muzahid", "vakaliya"]
// var b = ["muzahid1", "vakaliya1"]
//  var c = [...a,...b]
//  console.log(c);   // output : ['muzahid', 'vakaliya', 'muzahid1', 'vakaliya1']

// var a = [["muzahid"], ["vakaliya"],["muzahid 1"], ["vakaliya 1"]]
// var b = [...a]
// b.shift().shift()
// console.log(a);
// console.log(b);

// var a = ["1","2","3"]
// var b = ["5","6","7"]

// console.log(a.concat(b));

// --------------> spread in object 

// var a = {
//     name1 : "muzahid",
//     lname1 : "vakaliya"
// }

// var b = {
//     name :"muzahid 1",
//     lname : "vakaliya 1"
// }

// var cloneObj = {...a,...b}

// console.log(cloneObj.name1);



// var obj = {
//     name : "muzahid",
//     lname : "vakaliya"
// }

// Object.assign(obj , {fullname : "muzahid "})
// Object.assign(obj , {
//     set fn(a){
//         console.log(a);
//     }
// }, {fn :1})

// console.log(obj);

//  -----------------> marge object in spread using function

// var obj1 = {
//     name : "muzahid",
//     lname : "vakaliya"
// }

// var obj2 = {
//     name1 : "muzahid 1",
//     lname : "muzahid 2"
// }

// const marg = (...a)=>{
//     return {...a}
// }
// console.log(marg(obj1,obj2));

// ------------------------>

// function showName(firstName, lastName, ...titles) {
//     alert( firstName + ' ' + lastName ); // Julius Caesar
  
//     // the rest go into titles array
//     // i.e. titles = ["Consul", "Imperator"]
//     alert( titles[0] ); // Consul
//     alert( titles[1] ); // Imperator
//     alert( titles.length ); // 2
//   }
  
//   showName("Julius", "Caesar", "Consul", "Imperator");

// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { foo: "baz", y: 13 };
// const merge = (...objects) =>
//   objects.reduce((acc, cur) => ({ ...acc, ...cur }));

// const mergedObj1 = merge(obj1, obj2);
// console.log(mergedObj1);

// function showName() {
//     alert( arguments.length );
//     alert( arguments[0] );
//     alert( arguments[1] );
  
//     // it's iterable
//     // for(let arg of arguments) alert(arg);
//   }
  
//   // shows: 2, Julius, Caesar
//   showName("Julius", "Caesar");
  
//   // shows: 1, Ilya, undefined (no second argument)
//   showName("Ilya");


// const a = [7]
// let b = [6]
// var c = a=b
// console.log(c);
 
// ----------------------->
// const a = (a,b,c)=>{
//     a+=1
//     console.log(a);
//     b+=1
//     console.log(b);
//     c+=1
//     console.log(c);
//     return a+b+c
// }
// console.log(a(1,2,3));

// ------------------------>

// const fn5 = ( a ) => ( { prop1: a } );

// console.log( fn5( 5 ) );

// function app (a){
//     return {
//         name : a
//     }
// }
// console.log(app("muzahid"));

// const app1 = (a)=> ({ name : a})
// console.log(app1("muzahid"));


// let arr = new Array()

// arr.push("muzahid")
// console.log(arr);


var obj = {
    name : "muzahid",
    lname : "vakaliya",
    address : "morbi , gujarat",
    
    fullname : ()=> {
        
        // console.log(this);
         console.log(this.lname);
         console.log(this.name);
        //  console.log(this.lname);
        console.log(this.address);
    }
}

obj.fullname()