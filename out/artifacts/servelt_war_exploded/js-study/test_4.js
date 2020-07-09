//자바스크립트의 call stack

function printName(firstname) {
    var myname = "jisu";
    return myname + " ," +  firstname;
}

function run(firstname) {
    firstname = firstname || "Youn";
    var result = printName(firstname);
    console.log(result);
}
//run이 호출되고 그 다음에 printName이 호출된다.

function foo(b){
    var a = 5;
    return a * b + 10;
}

function bar(x){
    var y = 3;
    return foo(x * y);
}

console.log(bar(6));

// callstack에 main이 깔림.그 위에 console.log(bar(6))가 깔림.
// 그 위에 bar(6)이 깔림. 마지막으로 foo(18)이깔린다.
// 반대로 foo(18)부터 값을 순서대로 리턴해주면서 callstack이 없어진다.

//Maximum call stack size exceeded 오류는 함수를 연속적으로 계속 호출해서 callstack이 꽉차버리는경우