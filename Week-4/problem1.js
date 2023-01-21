class CustomPromise {
  constructor(callback) {
    this.state = "pending";
    this.value = undefined;
    this.resolveCallback = [];
    this.rejectCallback = [];
    callback(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value) {
    this.value = value;
    this.state = "fulfilled";
    for (const callback of this.resolveCallback) {
      callback(this.value);
    }
  }
  reject(value) {
    this.value = value;
    this.state = "rejected";
    for (const callback of this.rejectCallback) {
      callback(this.value);
    }
  }
  then(resolveCallback, rejectCallback) {
    if (this.state === "fulfilled") {
      resolveCallback(this.value);
    }
    if (this.state === "rejected") {
      rejectCallback("this.value");
    } else {
      this.resolveCallback.push(resolveCallback);
      this.rejectCallback.push(rejectCallback);
    }
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







