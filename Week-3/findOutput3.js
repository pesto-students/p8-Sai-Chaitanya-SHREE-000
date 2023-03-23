function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged? Ans -: zero

// When increment function calls count will 
// be increased inside function. In log 
// function can access "count" variable
// because of closure, that means count 
// varible declared in parent function
// named createIncrement. But count 
// incremented inside increment function. 
// Because of this encapsulation log function
// wont get incremented count