//  merge two users profiles

let personelInfo = {
    name: "Dakshak",
    age: 20,
    citty: "Jos"
}

let personelInfo2 = {
    email: "dshak0672@gmail.com",
    institude: "Blockfuse Labs"
}
console.log( Object.assign(personelInfo, personelInfo2))




//  log product keys and Value
let products = {
    product1: "pefume",
    product2: "cream"
}
console.log(products)
console.log(Object.keys(products))
console.log(Object.values(products))



// freeze setting object

let settings ={
    theme: "Dark",
    Notification: true
}

Object.freeze(settings)

 if(Object.isFrozen(settings)){
    console.log("is a dark mode")
 }else{
    console.log("change to light mode")
 }
