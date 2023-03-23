// class CustomPromise {
//   constructor(callback) {
//     this.state = "pending";
//     this.value = undefined;
//     this.resolveCallback = [];
//     this.rejectCallback = [];
//     callback(this.resolve.bind(this), this.reject.bind(this));
//   }
//   resolve(value) {
//     this.value = value;
//     this.state = "fulfilled";
//     for (const callback of this.resolveCallback) {
//       callback(this.value);
//     }
//   }
//   reject(value) {
//     this.value = value;
//     this.state = "rejected";
//     for (const callback of this.rejectCallback) {
//       callback(this.value);
//     }
//   }
//   then(resolveCallback, rejectCallback) {
//     if (this.state === "fulfilled") {
//       resolveCallback(this.value);
//     }
//     if (this.state === "rejected") {
//       rejectCallback("this.value");
//     } else {
//       this.resolveCallback.push(resolveCallback);
//       this.rejectCallback.push(rejectCallback);
//     }
//   }
// }

// function getNumber() {
//     return Math.random() * 1000;
// }

// const myPromise = new CustomPromise((resolve, reject) => {
//         const randomNum = getNumber();
//             if (randomNum % 5 === 0) reject('failed');
//             else resolve('sucess');
// })

// myPromise.then(result => {
//     console.log(result);
// }, error => {
//     console.log(error);
// })

const name = {
    firstName: "shree",
    lastName: "hari",
}

let printName = function (place, place1) {
    console.log(`first name - ${this.firstName} second name 
    - ${this.lastName} live in ${place} - ${place1}`);
}

// printName = printName.bind(name);
// console.log(printName());

// Function.prototype.myCall = function(obj = {}, ...arg) {
//     console.log(arg, 'this in myCall');
//     obj.fn = this;
//     obj.fn(arg[0])
// }
// Function.prototype.myBind = function(...arg) {
//     const obj = this
//     return function(place) {
//         obj.call(arg[0], place)
//     }
// }
Function.prototype.myBind = function(obj = {}, ...arg) {
    obj.fn = this;
    return function(...args) {
        obj.fn(arg[0], args[0])
            // obj.call(arg[0], arg[1])
        }
    }
// printName = printName.myCall(name, 'tvpm');
printName = printName.myBind(name, 'tvpm');
console.log(printName);

class CustomPromise {
    constructor(callback) {
        this.state = 'pending';
        this.value = undefined;
        this.resolveCB = [];
        this.rejectCB = [];
        callback(this.resolve.bind(this), this.reject.bind(this))
    }

    resolve(value) {
        this.value = value;
        if (this.state === 'pending') this.state = 'fulfilled';
    }
    reject(value) {
        this.value = value;
        if (this.state === 'pending') this.state = 'rejected';
    }
    then(resolveCB, rejectCB) {
        if (this.state === 'fulfilled') resolveCB(this.value);
        if (this.state === 'rejected') rejectCB(this.value);
    }
}

function getNumber() {
    return Math.random() * 1000;
}
const myPromise = new CustomPromise((resolve, reject) => {
        const randomNum = getNumber();
            if (randomNum % 5 === 0) reject('failed');
            else resolve('sucess');
})

myPromise.then(result => {
    console.log(result);
}, error => {
    console.log(error);
})

