// async function detail (){

//     // let name = new Promise((res,rej)=>{
//         await setTimeout(()=>{
//             console.log("my name is muzahid");
//         },3000)
//     // })
   
//     //  let lname = new Promise((res,rej)=>{
//       await setTimeout(() => {
//             console.log("my last lname is vakaliya");
//         }, 1500);
//     //  })

//     // let printlname = await lname
//     // let printname = await name


// }
// detail()

// -----------------------> async await example 

// async function app (){
//     console.log("hello 1 ");
//    await console.log("hello 2 ");
//     console.log("hello 3 ");
// }
// console.log("hello 4");
// app()
// console.log("hello 5");

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       resolve("I love You !!");
//     });
//      console.log( await myPromise);
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();

// ------------------> api fatching in async await 

// async function getdetail (){
//     let id = document.getElementById("demo")
//     console.log("api fatching function called ");
//     // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     let data = await fetch("./jsondata.json")
//     // let result = await  data.json()
//     let result =  data.json()
//     // console.log(result);
//     return result;

// }
// getdetail().then((res)=>{
//     console.log(res);
// }).catch ((err)=>{
//     console.log(err);
// })
// console.log("waiting for api result ");

// ----------------------------->  

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'john'
            });
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}

// getUser(100)
//     .then(getServices)
//     .then(getServiceCost)
//     .then(console.log);

async function showServiceCost() {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
}

showServiceCost()   