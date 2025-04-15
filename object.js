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
console.log(Object.keys(personelInfo))
console.log(Object.values(personelInfo))



// freeze setting object

let obj={
    theme: "Dark",
    Notification: true
}

Object.freeze(obj)
 if(Object.isFrozen(obj)){
    console.log("is a dark mode")
 }else{
    console.log("change to light mode")
 }
