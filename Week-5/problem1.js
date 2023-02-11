function doTask1() {
    return console.log('doTask1 called');
}

async function doTask2() {
    return console.log('doTask2 called inside setTimout');
}

function  doTask3() {
    return console.log(' doTask3 called');
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function async_await_func() {
    doTask1();
    await delay(2000);
    doTask2();
    doTask3(); 
}

async_await_func();

async function* generator_func() {
    yield doTask1();
    yield await delay(2000);
    yield doTask2();
    yield doTask3();
}

const iterator = generator_func();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
