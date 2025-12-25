//spread
// primitive==location->original value
// let num=[1,2,3];
// let d=[... num];
// console.log(d)


// //recursion

// function fact(n){
//     if(n==1||n==0) return 1;
//     return n*fact(n-1);
// }

// console.log(fact(5));



//js is single thread
//event loop


//alert
// alert("hello");

//prompt is always a string.
//convert afterwards

// let a=prompt("enter something")
// console.log(a)





//settimeout
//callback

//callback hell


//js is asynchronous in nature...

// function greet(){
// setTimeout(function(){
// return 1;},2000)
// }
// console.log(greet());






//promises                            3 month w1 d=3


let age=3;
let mypromise=new Promise((res,rej)=>{
    if(age<4){
        res("HELLO")
    }
    else{
        rej("ERROR")
    }
});

// mypromise.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error)
// })

async function handlePromise() {
    try {
        const value = await mypromise;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}

handlePromise();

