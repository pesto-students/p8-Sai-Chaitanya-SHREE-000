// let car = {
//     name: 'Audi',
//     sayName() {
//         console.log(this.name);
//     }
// }
// const sayName = car.sayName;
// sayName(); 
// // undefined (default binding)
// car.sayName(); 
// // Audi (implicit binding)

// function greet(person) {
//     if(person == {name: "Newton"}) {
//         console.log('hey newton');
//     } else {
//         console.log('hey school');
//     }
// }
// greet({name: "Newton"}); 
// // hey school (pass by reference)

// function Vehicle(model, color, year, country) { 
//     this.model = model; 
//     this.color = color; 
//     this.year = year; 
//     this.country = country; 
// }
// const carObj = new Vehicle("Honda", "white", "2010", "UK"); 
// console.log(carObj); 
// // Vehicle { model: 'Honda', color: 'white', year:'2010', country: 'UK' }

// function foo() { 
//     let x = y = 0; 
//     x++; 
//     y++; 
//     return x; 
// }
// console.log(foo(), typeof x, typeof y); 
// // 1, undefined, number

// function main(){ 
//     console.log('A'); 
//     setTimeout( 
//     function print(){ console.log('B'); } ,0); 
//     console.log('C'); 
// } 
// main();
// // A C B

// function f(){}
// var y = 1; 
// if (f()) { 
// y += typeof f; 
// } 
// console.log(y); 
// // 1

// function f(){}
// var y = 1; 
// if (x = 10) { 
// y += typeof f; 
// } 
// console.log(y); 
// // 1function    

// var y = 1; 
// if (function f(){}) { 
// y += typeof f; 
// } 
// console.log(y, 'its y'); 
// // 1undefined

// var myChars = ['a', 'b', 'c', 'd'] 
// delete myChars[0]; 
// console.log(myChars); 
// // [<1 empty item>, 'b', 'c', 'd'];
// console.log(myChars[0]); 
// // undefined
// console.log(myChars.length); 
// // 4

// console.log(1 < 2 < 3); 
// // true;
// console.log(3 > 2 > 1);
// // false;

// function printNumbers(first, second, first) { 
//     console.log(first, second, first); 
// } 
// printNumbers(1, 2, 3);
// // 3 2 3 (final passed value will takes all)

// function normalFunc() {
//     console.log(arguments.length);
// }
// normalFunc(1, 2, 3)
// // 3 (arguments is an object can access all arguments)

// const arrowFunc = () => arguments.length; 
// console.log(arrowFunc(1, 2, 3));
// // 5 (arrow function always return 5 arguments)

// console.log(10 == [10]); 
// console.log(10 == [[[[[[[10]]]]]]]);
// // true true
    
// console.log([0] == false); 
// if(1) { 
// console.log("I'm True"); 
// } else { 
// console.log("I'm False"); 
// }
// // true I'm True

// console.log(0 == false); 
// if([0]) { 
// console.log("I'm True"); 
// } else { 
// console.log("I'm False"); 
// }
// // true I'm True

// console.log([0] == false); 
// if(0) { 
// console.log("I'm True"); 
// } else { 
// console.log("I'm False"); 
// }
// // true I'm False

// async function func() { 
//     return 10; 
// } 
// console.log(func()); 
// // Promise { 10 }

// async function func() { 
//     await 10; 
// } 
// console.log(func()); 
// // Promise { <pending> }

// let myNumber = 100; 
// let myString = '100'; 
// if (!typeof myNumber === "string") { 
// console.log("It is not a string!"); 
// } else { 
// console.log("It is a string!"); 
// } 
// if (!typeof myString === "number"){ 
// console.log("It is not a number!") 
// } else { 
// console.log("It is a number!"); 
// } 
// // It is a string 
// // It is a number
// // (!typof myNumber will be false) 
    
// class A { 
//     constructor() { 
//     console.log(new.target.name) 
//   } 
// } 
// class B extends A { constructor() { super() } } 
// new A(); 
// new B(); 
// // A B
    
// const [x, ...y] = [1, 2, 3, 4]; 
// console.log(x, y); 
// // 1 [2, 3, 4]

// const {a: x = 10, b: y = 20} = {a: 30}; 
// console.log(x); 
// console.log(b);
// // ReferenceError: b is not defined

// const {a: x = 10, b: y = 20} = {a: 30}; 
// console.log(x); 
// // 30
// console.log(y);
// // 20

// function area({length = 10, width = 20}) { 
//     console.log(length*width); 
// } 
// area(); 
// // TypeError: Cannot read properties of undefined 

// function area(length = 10, width = 20) { 
//     console.log(length*width); 
// } 
// area(); 
// // 200

// function area({length = 10, width = 20}) { 
//     console.log(length*width); 
// } 
// area({}); 
// // 200
    
// const props = [ 
//     { id: 1, name: 'John'}, 
//     { id: 2, name: 'Jack'}, 
//     { id: 3, name: 'Tom'} 
// ]; 
// const [,, { name }] = props; 
// console.log(name); 
// // Tom

// function add(item, items = []) { 
//     items.push(item); 
//     return items; 
// } 
// console.log(add('Orange')); 
// console.log(add('Apple')); 
// // ['Orange'] ['Apple']

// function myFun(x, y, ...manyMoreArgs) { 
//     console.log(manyMoreArgs) 
//     } 
//     myFun(1, 2, 3, 4, 5); 
//     // [3, 4, 5]
//     myFun(1, 2);
//     // []
    
// function* myGenFunc() { 
//     yield 1; 
//     yield 2; 
//     yield 3; 
// } 
// var myGenObj = new myGenFunc; 
// console.log(myGenObj.next().value); 
// // TypeError: myGenFunc is not a constructor

// function* myGenFunc() { 
//     yield 1; 
//     yield 2; 
//     yield 3; 
// } 
// var myGenObj = myGenFunc; 
// console.log(myGenObj.next().value); 
// // TypeError: myGenObj.next is not a function 

// function* myGenFunc() { 
//     yield 1; 
//     yield 2; 
//     yield 3; 
// } 
// var myGenObj = myGenFunc(); 
// console.log(myGenObj.next()); 
// // { value: 1, done: false }

// function* myGenFunc() { 
//     yield 1; 
//     yield 2; 
//     yield 3; 
// } 
// var myGenObj = myGenFunc(); 
// console.log(myGenObj.next().value); 
// // 1

// let count = 10; 
// (function innerFunc() { 
// if (count === 10) { 
// let count = 11; 
// console.log(count); 
// } 
// console.log(count); 
// })();
// // 11 10

// let zero = new Number(0); 
// if (zero) { 
// console.log("If"); 
// } else { 
// console.log("Else"); 
// } 
// // If

// let zero = new Number(0); 
// if (zero) { 
// console.log("If"); 
// } else { 
// console.log("Else"); 
// } 
// // If (here zero is an object [Number: 0])

// class Vehicle { 
//     constructor(name) { 
//     this.name = name; 
//     } 
//   start() { 
//   console.log(`${this.name} vehicle started`); 
//   } 
// } 
// class Car extends Vehicle { 
//     start() { 
//     console.log(`${this.name} car started`); 
//     super.start(); 
//     } 
// } 
// const car = new Car('BMW'); 
// console.log(car);
// // Car { name: 'BMW' }

// class Vehicle { 
//     constructor(name) { 
//     this.name = name; 
//     } 
//   start() { 
//   console.log(`${this.name} vehicle started`); 
//   } 
// } 
// class Car extends Vehicle { 
//     start() { 
//     console.log(`${this.name} car started`); 
//     super.start(); 
//     } 
// } 
// const car = new Car('BMW'); 
// car.start(); 
// // BMW car started
// // BMW vehicle started

// function Person() { } 
// Person.prototype.walk = function() { 
//   return this; 
// } 
// Person.run = function() { 
//   return this; 
// } 
// let user = new Person(); 
// let walk = user.walk; 
// console.log(walk()); 
// let run = Person.run; 
// console.log(run()); 
// // global global

// const squareObj = new Square(10); 
// console.log(squareObj.area); 
// class Square { 
// constructor(length) { 
// this.length = length; 
//   } 
// get area() { 
// return this.length * this.length; 
//   } 
// set area(value) { 
// this.area = value; 
//   } 
// } 
// // ReferenceError: Cannot access 'Square' before initialization

// class Square { 
//     constructor(length) { 
//         this.length = length; 
//     } 
//     get area() { 
//         return this.length * this.length; 
//     } 
//     set area(value) { 
//         this.area = value; 
//     } 
// } 
// const squareObj = new Square(10); 
// console.log(squareObj.area); 
// // 100

// let arr = let arr = [2,'A',"B",true,[6,7,[9,0]]]; 
// console.log(arr);
// // SyntaxError: Unexpected identifier

// let arr = [2,'A',"B",true,[6,7,[9,0]]]; 
// console.log(arr);
// // [2,'A',"B",true,[6,7,[9,0]]]

// let a = new String("abc"); 
// let b = new Object("abc"); 
// if(a==b){ 
// console.log("yes"); 
// }else{ 
// console.log("no"); 
// }
// // no

// let a = new String("abc"); 
// let b = new String("abc"); 
// if(a==b){ 
// console.log("yes"); 
// }else{ 
// console.log("no"); 
// } 
// // no

// let a = new String("abc"); 
// let b = "abc"; 
// if(a==b){ 
// console.log("yes"); 
// }else{ 
// console.log("no"); 
// } 
// // yes

// let a = new Object("abc");
// let b = "abc"; 
// if(a==b){ 
// console.log("yes"); 
// }else{ 
// console.log("no"); 
// } 
// // yes

// console.log(1); 
// console.log(2); 
// setTimeOut(() => { 
// console.log(3); 
// },0) 
// console.log(4);
// // 1 2 ReferenceError: setTimeOut is not defined 

// console.log(1); 
// console.log(2); 
// setTimeout(() => { 
// console.log(3); 
// },0) 
// console.log(4);
// // 1 2 4 2

// var num = 0; 
// function run(){ 
// console.log(num);  
// } 
// run();
// // 0

// var num = 0; 
// function run(){ 
// console.log(num);  
// var num = 1;
// } 
// run();
// // undefined

// var num = 0; 
// function run(){ 
//     var num = 1;
//     console.log(num);  
// } 
// run();
// // 1

// const num = 0; 
// function run(){ 
//     var num = 1;
//     console.log(num);  
// } 
// run();
// // 1

// const num = 0; 
// function run(){ 
//     const num = 1;
//     console.log(num);  
// } 
// run();
// // 1

// const num = 0; 
// function run(){ 
//     console.log(num);  
//     var num = 1;
// } 
// run();
// // undefined

// var myObject = { 
//     foo: "bar", 
//     func: function() { 
//     var self = this; 
//     console.log("outer func: this.foo = " + this.foo); 
//     console.log("outer func: self.foo = " + self.foo); 
//     (function() { 
//     console.log("inner func: this.foo = " + this.foo); 
//     console.log("inner func: self.foo = " + self.foo); 
//     }()); 
//   } 
// }; 
// myObject.func(); 
// // outer func: this.foo = bar
// // outer func: self.foo = bar
// // inner func: this.foo = undefined
// // inner func: self.foo = bar

// (function() { 
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4); 
// })(); 
// // 1 4 3 2

// (function(x) { 
//     return (function(y) { 
//     console.log(x); 
//     })(2) 
// })(1);
// // 1

// (function(x) { 
//     return (function(x) { 
//     console.log(x); 
//     })(2) 
// })(1);
// // 2

// var length = 10; 
// function fn() { 
// console.log(this.length); 
// } 
// var obj = { 
// length: 5, 
// method: function(fn) { 
//   fn(); 
//   arguments[0](); 
//   } 
// }; 
// obj.method(fn, 1);
// // undefined 2

// var a = 10;
// function abc() {
//     console.log(this.a);
// }
// abc()
// // undefined

// var b = 1; 
// function outer(){ 
// var b = 2 
// function inner(){ 
// console.log(b, ' ---> 1') 
// b++; 
// console.log(b, ' ---> 2') 
// var b = 3; 
// console.log(b, ' ---> 3') 
// } 
// inner(); 
// } 
// outer();
// // undefined  ---> 1
// // NaN  ---> 2
// // 3  ---> 3

    





    


