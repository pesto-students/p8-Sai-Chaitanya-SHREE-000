// function API(ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve('sucess')
//       }, ms)
//     });
//   }

//   function callAPI() {
//     const apiData = API(500);
//     const promiseRace = Promise.race([apiData])
//     promiseRace.then(
//     result => console.log(result),
//     error => console.log(error))
//     apiData.then((result) => console.log(result))
//   }

//   callAPI()
const fetchData = fetch();
const timeOut = () => {
    return new Promise((resolve, reject) => {
        setTimeout(reject(undefined), 500)
    })
}

function callAPI() {
    const promiseArr = Promise.race([fetchData, timeOut])
}

// function User() {
//     this.name = "John Doe",
//     this.score = 20,
//     arrow = () => {
//         console.log(this, 'this in arrow');
//     }
//     this.sayUser = function () {
//         console.log(this);

//         function innerFunction() {
//         // console.log(this, 'this in innerFunction');
//         }

//         innerFunction();
//     };
//     arrow()
//   }
//   let name = new User();
//   name.sayUser();

// const wheatherAPI = [api1, api2, api3];

// function checkWheather() {
//         const resultPromise = Promise.allSettled(wheatherAPI)
//         resultPromise
//         .then(result => console.log(result),
//         error => console.log(error))
//         .catch(err => console.log(err))
// }

// checkWheather()

// const name = {
//     firstName: "shree",
//     lastName: "hari",
// }

// function printName(place, ) {
//     console.log(`my name is ${this.firstName} 
//     ${this.lastName} from ${place}`);
// }

// Function.prototype.myBind = function(...args) {
//     let obj = this;
//     return function() {
//         obj.call(args[0], args[1])
//     }
// }

// const print = printName.myBind(name, "delhi")
// print('xyz');

// function getResponseWithTimeout() {
//     const api = new Promise((resolve, reject) => {
//         const timeout = setTimeout(() => {
//             resolve(undefined);
//         }, 500);
//     });
        
//         api().then(response => {
//             clearTimeout(timeout);
//             resolve(response);
//         }).catch(error => {
//             clearTimeout(timeout);
//             reject(error);
//         });
// }
// const obj = {
//     name : "shree",
//     place : "kmr",
//     outer: function() {
//     return function normal() {
//         console.log(this, 'in normal function');
//         }
//       }
//     }

//     const normalFunc = obj.outer();
//     normalFunc()





