
document.getElementById("123").innerHTML = "hi world!";




function MyFirstJSfunction(x,y) {
    return x * y;
}

var x = MyFirstJSfunction(2,4);
var y = MyFirstJSfunction(107, 67);
console.log(x, y);


var student = {name:"Emma",age:19};
console.log(student.name);

document.getElementById("123").innerHTML = "hi " + student.name + "!";
