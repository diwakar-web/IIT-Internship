// let a;
// console.log(a);
// a=9;








// let student={
//     name:'lakshya',
//     age:17
// }

// if(student.age<16){

//     console.log('condition-1');
//     console.log(student.name,'can vote');
//     console.log(student.name+"'s" ,'age is',student.age);
//     console.log(`${student.name} can vote as ${student.name}'s is ${student.age} `)

// }

// else if(student.age>16){
//     if(student.name=='lakshya'){
//             console.log("hello, he can't vote")

//     }
//     else{
//         console.log("he can vote");
//     }

// }

// else{

//     console.log('condition-2')
// }
/////// NESTING IS POSSIBLE ANYWHERE EITHER IN IF,ELSE IF OR IN ELSE PART.....


// console.log(1 !== "1");





// let student = {
//     name: 'lakshya',
//     age: 20,
//     semester: 3
// }

// if(student.name="lakshya"){
//     console.log("if statement");
// }
// else if(student.age=17){
//     console.log("else if cond.")

// }

// else{
//     console.log("else cond");
// }



//SWITCH

// switch (true) {
//     case (student.age > 18):
//         console.log("can vote");
//         break;
//     case (student.age == 18):
//         console.log("just became eligible ");
//         break;
//     default:
//         console.log("cannot vote");
// }







//LOOPS


// let a
// for(let i=0;i<10;i+=2)
// {
//     console.log(i);
// }



// let b=[1,2,3,4,5,6,7,8,9,10]
// for(let j=0;j<b.length;j++)
// {
//     console.log(b[j]);
// }



//WHILE LOOP


// let a=10;

// while(a>0){
//     console.log("Hello",a)
//     a--;
// }



//DO WHILE

// let count=10
// do{
//     console.log("Hello World")
//     count--;
// }
// while(count<0);


//functions----

// function dn(a)
// {
//     console.log(`Hi ${a}, Nice To Meet You !`)

// }
// a=dn("Diwakar");





//fxn expression 

// const  greet=function (hi){
//     console.log("hello",hi)
// }

// greet('diwakar');







//arrow func

// const add=(a,b)=>a+b;
// console.log(add(5,6))






//IIFE


// (function(a){console.log("Hello Everyone!"+a)})
// (9)

//callback fxn

// function process(name,callback){
//     console.log(`user name - ${name}`);
//     callback();

// }

// function done(){
//     console.log("done processing");
// }

// process("diwakar",done);








//Higher order fxn

// function calculate(operation,a,b){
//     return operation(a,b);
// }
// const add=(x,y)=>x+y;
// const subt=(x,y)=>x-y;
// console.log(calculate(add,10,5));
// console.log(calculate(subt,10,5));













//meathods and loops are difference-
// let arr = [1, 2, 6, 7, 8];

// console.log(arr)

// arr.forEach((value, index, array) => {
//   array[index] = value * 3;
// });

// console.log(arr); 


//map

// let arr=[3,4,6,7,9,12];

// function three(c){
//     return c%3==0;
// }

// let bita =arr.filter(three);
// console.log(bita)
