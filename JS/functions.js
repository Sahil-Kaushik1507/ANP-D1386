// // normal fun

// // function add(a,b){

// //     // let a = 10;
// //     // let b=20;
// //     let c = a+b;
// //     console.log(c);
// // }

// // add(5,10);


// // fun into var

// var myfun = function (a,b){
//     let c = a+b;
//     console.log(c);
// }


// myfun(10,15);


// // arrow fun

// var myfun2= (a,b)=>{
//     let c = a+b;
//     console.log(c)
//     return c;
// }


// myfun2(10,55);

// // callbacks

// // function fun1(){
// //     console.log("i am fun 1")
// // }

// // function fun2((a,b)=>{


// // }){
// //     fun1();
// // }

// // fun2();


// var myfun3= (a,b)=> (a+b);

// console.log(myfun3(10,22));



// // iife 

// (function (){
//     console.log("i am a iife")
// })();

// (()=>{
//     console.log("hello in 2nd iife")
// })()




add(10,20);
console.log(a)
// console.log(b)

function add(a,b){
    console.log(a+b)
    function add10(){
        let res=a+b+10
            console.log(res);

            function oddeven(res){
                if(res%2==0){
                    console.log(res+" is even")
                }else{
                    console.log(res+" is odd")
                }
                
            }
            oddeven()
        }
        add10();
}

var a = 10;
let b = 20;

console.log(b)
console.log(a)

