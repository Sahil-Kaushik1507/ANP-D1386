
const root = document.getElementById("root");




function createNewElement(element,href,text  ){
    const newelement= document.createElement(element);
    newelement.setAttribute('href', href)
    newelement.innerText = text

    return newelement
}

const newele = createNewElement ('a',"https://www.nasa.gov/news/recently-published/","nasa website")



function render(){
    root.appendChild(newele);
}

render()
