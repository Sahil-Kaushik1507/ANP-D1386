let myobj = {

    roll: 1,
    "First Name":"Sahil",
    Last_Name:"Kaushik",
    marks:33,
    mob:11111111,
    eamail:"abc@gmail.com",
    myarr:[1,3,4,5],
    myfun:()=>{console.log("hello")

    },
   
    

}



// console.log(Object.keys(myobj)[1])
// console.log(myobj[2]);

Object.freeze(myobj);


myobj.subject="maths"

console.log(myobj)

console.log(Object.values(myobj));