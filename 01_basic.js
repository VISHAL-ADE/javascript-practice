const mySym= Symbol ("key1")
const JsUser={
    "full name" : "Vishal ade",
    name:"Vishal",
    age:"25",
    location:"balaghat",
    email:"vishalade.va@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Suterday"],
    [mySym]:"mykey1"

}
// console.log(JsUser["email"])
//  console.log(JsUser[mySym])
//  console.log(JsUser["lastLoginDays"])
//   console.log(JsUser["full name"])
// console.log(typeof [JsUser.mySym]);
JsUser.greeting= function(){
    console.log("Hello JsUser");

}
JsUser.greetingTwo= function(){
    console.log(`Hello JsUser,${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



