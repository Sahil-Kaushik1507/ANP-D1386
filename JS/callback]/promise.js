

// const promise = new Promise((resolve,reject)=>{

//     var check =false;

//     if(check){
//         resolve("promise resloved")
//     }else{
//         reject("some error")
//     }

// })

// promise
//     .then((msg)=>console.log(msg))
//     .catch((err)=>console.log(err))


    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      