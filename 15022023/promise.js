// console.log("hello in promise toturial");

// function getUsers() {
//     return [
//       { username: 'john', email: 'john@test.com' },
//       { username: 'jane', email: 'jane@test.com' },
//     ];
//   }
  
//   function findUser(username) {
//     const users = getUsers(); 
//     const user = users.find((user) => user.username === username);
//     return user;
//   }



//   console.log(findUser('jane'));

// async function app (){
//   await  console.log("hello world 1");
//    await setTimeout(() => {
//         console.log("hello world 2");
//     }, 1500);
//     console.log("hello world 3");
// }
// app()
  
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("hello 1");
//         // resolve("resolved")
//         reject(new Error("this is a error"))
//     }, 1500);
// })
// console.log(promise);

// function data (){
//     return new Promise ((resolve,reject)=>{

//     setTimeout(() => {
//         reject(
//         //  [{
//         //     name : "muzahid",
//         //     lname : "vakaliya"
//         //  }]
//         new Error("promise is rejected")
//          )
//     }, 1500);
// }
// )

// }

// console.log(data().then((a)=>{
//     console.log(a);
// }).catch ((err=>{
//     console.log(err);
// }))
// );

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The first promise has resolved');
//       resolve(10);
//     }, 1 * 1000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The second promise has resolved');
//       resolve(20);
//     }, 2 * 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('The third promise has resolved');
//       resolve(30);
//     }, 3 * 1000);
//   });
  
//   Promise.all([p1, p2, p3]).then((results) => {
//     console.log(results);
//     const total = results.reduce((p, c) => p + c);
  
//     console.log(`Results: ${results}`);
//     console.log(`Total: ${total}`);
//   });

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});


 let a = Promise.race([p1, p2]) 
 a.then((a)=>{
    console.log(a);
 })
    // .then(value => console.log(`Resolved: ${value}`))
    // .catch(reason => console.log(`Rejected: ${reason}`))
