// // // var myfunc = function(a, x) {
// // //     return a * x;
// // // };
// // // var x = myfunc(2, 3);
// // // var y = myfunc;
// // // console.log(x);
// // // console.log(y(2, 3));
// // // //alert(x);
// // // //alert(y(2, 3));


// // // var x = 5; // var is used intentionally
// // // function foo() { console.log(this.x); }
// // // foo();
// // // const obj = { x: 10, bar: function() { console.log(this.x); } };
// // // obj.bar();
// // // const bar2 = obj.bar;
// // // bar2();
// // // obj.foo = foo;
// // // obj.foo();

// // // var protoObj = { x: 5, y: 7, z: 9 };
// // // var myObj1 = Object.create(protoObj);
// // // console.log(myObj1.x);
// // // var myObj2 = Object.create(protoObj);
// // // myObj2.x = 0;
// // // console.log(myObj2.x);
// // // delete myObj1.y;
// // // console.log(myObj2.y);
// // // console.log(myObj1.y);
// // // console.log(protoObj.y);
// // // delete protoObj.z;
// // // console.log(myObj2.z);
// // // console.log(myObj1.z);
// // // console.log(protoObj.z);
// // // delete myObj2.x;
// // // console.log(myObj2.x);
// // // myObj2.z = 8;
// // // delete protoObj.z;
// // // console.log(protoObj.z);

// // function Foo(bar) {
// //     this.count = 0;
// //     this.bar = bar;
// // }
// // var obj1 = new Foo(5);
// // console.log(obj1.count);
// // //obj1.increment();
// // Foo.prototype.increment = function() {
// //     this.count++;
// // };
// // obj1.increment();
// // console.log(obj1.count);
// // var obj2 = new Foo(10);
// // console.log(obj2.count);
// // obj2.increment();
// // console.log(obj2.count);

// (function(x, y) {
//     "use strict";
//     console.log(this);
//     console.log(x, y);
//     const obj = { x: 2, foo: function() { console.log(this.x) } };
//     obj.foo();
//     obj.bar = () => console.log(this.x);
//     obj.bar();
// })(5, 7);
var x = 1;

function foo() {
    console.log(x);
    var y = 2;

    function foo1() {
        var y = 3;
        if (!x) {
            z = 4;
        }
        var x = 5;
        console.log(x + y + z);
    }

    if (y == 2) {
        var x = 3;
    }
    //console.log(z);
    foo1(); /* Comment this call and see the changes */
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x);
//console.log(y);
//console.log(z);
foo(); /* Comment this call and see the changes */
console.log(x);
//console.log(y);
//console.log(z);