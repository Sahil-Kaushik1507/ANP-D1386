// callbacks --> callback hell --> promise (fetch) --> promuise chaining --> asyn await



// table 
// order
// cooking
// serve
// bill pay


async function restroworking(){
    await tablebooking();
    await order();
    await cooking();
    await serve();
    await Billpay();
    await (()=>console.log("coustmer happay"))();
}

restroworking();






function tablebooking(){
    return new Promise((resolve)=>{
             console.log("person arrived...")
    setTimeout(()=>{
        console.log("table booked..")
        resolve();
    },1000)
    })
   
}


function order(){
      return new Promise((resolve)=>{
    console.log("checking menu...");
    setTimeout(()=>{
        console.log("order placed...");  
        resolve(); 
    },3000)
})
}


function cooking(){
      return new Promise((resolve)=>{
    console.log("cooking...");
    setTimeout(()=>{
        console.log("ready for serve/ cooked...");  
        resolve(); 
    },2000)
      })
}


function serve(){
      return new Promise((resolve)=>{
    console.log("servingg...");
    setTimeout(()=>{
        console.log("served...");
        resolve()   
    },500)
})
    
}

function Billpay(){
     return new Promise((resolve)=>{
    console.log("enjoyed food...");
    setTimeout(()=>{
        console.log("bill given paid...");
        resolve();   
    },3000)
})
}





// tablebooking().then(order).then(cooking).then(serve).then(Billpay)



// function tablebooking(){
//     return new Promise((resolve)=>{
//              console.log("person arrived...")
//     setTimeout(()=>{
//         console.log("table booked..")
//         resolve();
//     },1000)
//     })
   
// }


// function order(){
//       return new Promise((resolve)=>{
//     console.log("checking menu...");
//     setTimeout(()=>{
//         console.log("order placed...");  
//         resolve(); 
//     },3000)
// })
// }


// function cooking(){
//       return new Promise((resolve)=>{
//     console.log("cooking...");
//     setTimeout(()=>{
//         console.log("ready for serve/ cooked...");  
//         resolve(); 
//     },2000)
//       })
// }


// function serve(){
//       return new Promise((resolve)=>{
//     console.log("servingg...");
//     setTimeout(()=>{
//         console.log("served...");
//         resolve()   
//     },500)
// })
    
// }

// function Billpay(){
//     console.log("enjoyed food...");
//     setTimeout(()=>{
//         console.log("bill given paid...");   
//     },3000)
    
// }









// tablebooking(()=>
//     order(()=>
//         cooking(()=>
//             serve(()=>
//                 Billpay()))));



// function tablebooking(callbackfun){
//     console.log("person arrived...")
//     setTimeout(()=>{
//         console.log("table booked..")
//         callbackfun();
//     },1000)
// }


// function order(callbackfun){
//     console.log("checking menu...");
//     setTimeout(()=>{
//         console.log("order placed...");  
//         callbackfun(); 
//     },3000)
    
// }


// function cooking(callbackfun){
//     console.log("cooking...");
//     setTimeout(()=>{
//         console.log("ready for serve/ cooked...");  
//         callbackfun(); 
//     },2000)
    
// }


// function serve(callbackfun){
//     console.log("servingg...");
//     setTimeout(()=>{
//         console.log("served...");
//         callbackfun()   
//     },500)
    
// }

// function Billpay(){
//     console.log("enjoyed food...");
//     setTimeout(()=>{
//         console.log("bill given paid...");   
//     },3000)
    
// }
