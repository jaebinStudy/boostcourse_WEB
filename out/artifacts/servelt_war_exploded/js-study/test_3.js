// 함수의 선언문.
// function printName(firstname) {
//     var myname = "jisu";
//     return myname + " " +  firstname;
// }

// 함수 표현식 선언.
function test() {
    console.log(printName());
    var printName = function() {
        return 'anonymouse';
    }
}
test();
// // ㄴ TypeError: printName is not a function
// printName(); //아직, printName이 undefined으로 할당된 상태다.
// var printName = function(){}



function printName(firstname) {
    var myname = "jisu";
    var result = myname + " " +  firstname;
}
//반환값은 undefind. return값이 꼭 존재해야 함. 없을 때 undefind. void타입이 없다.

//함수 - arguments 객체
function a() {
    console.log(arguments);
}
a(1,2,3);