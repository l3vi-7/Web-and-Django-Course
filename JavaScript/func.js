// function hello () {
//   console.log("Hello");
// }
//
// hello();
//
// function helloName (name) {
//   console.log("Hello " + name);
// }
//
// helloName("Shravan");
//
// function addS (item1, item2) {
//   console.log(item1 + item2);
// }
//
// addS(1,2);
//
// addS("1","2")
//
// addS("Shravan","Shetty")
//
// function helloSomeone(name="Frankie"){
//     console.log("Hello "+name);
// }
//
// helloSomeone();

// function formal(name="Sam",title="Sir") {
//     console.log(title+" "+name)
// }
//
// //
// "Welcome " + formal()


function formal(name="Sam",title="Sir"){
    return title+" "+name;
}

//
"Welcome "+ formal()

// var v = "I'm global v"
// var stuff = "I'm global stuff"
//
// function fun(stuff){
//     console.log(stuff);
//     console.log(v);
//     stuff = "Reassign stuff inside func";
//     console.log(stuff);
// }
//
// // Now see what happens!
// fun()
