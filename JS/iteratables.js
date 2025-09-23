    // map
    // filter 
    // reduce
    // for each


 

// function add(a,b){
//     console.log(a+b);
    
// }
     
// add(10,20);

// for(let i=0; i<myarr.length,i++){
//     abc(myarr[i],i,myarr);
// }

    // myarr.forEach((value,index,array)=>{

    //     console.log(value, index, array)
    // })





   let myarr =[1,2,3,45,6,765,4,46,676,90]
//    let newarr=[];

//     let myval = myarr.forEach((value)=>{

//         return(value*value)
//     })


//     console.log(myval)


// let newarr = myarr.map((value,index,array)=>{

    
//         return(value*value)
//     // console.log(value, index, array)
// })

// console.log(newarr);



// let cube = myarr.map((index)=>index*index*index)

// console.log(cube);



// let even= myarr.filter((value,index,array)=>{

//     return value%2==0;
// })

// let odd = myarr.filter(val=>val%2!=0)


// console.log(odd)


// reduce

let price = [250,500,400,230,752,126,460]

let total=0;
for(let i =0; i<price.length;i++){
    total=total + price[i]
}

console.log(total);


// let totalbyreduce = price.reduce((accu,currvalue, index, array)=>{
//     return accu + currvalue;
// },0)

let totalbyreduce = price.reduce((acc,val)=> acc+val,0)

console.log(totalbyreduce)