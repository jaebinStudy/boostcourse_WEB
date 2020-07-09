//전역객체(window)에 속한 메서드 ,alert 그리고 setTimeout
window.setTimeout();
setTimeout();

function run() {
    setTimeout(function() {
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 1000);
}

run();
//setTimeout의 실행은 비동기(asynchronous)로 실행되어 동기적인 다른 실행이 끝나야 실행된다.
function run() {
    console.log("start");
    setTimeout(function() {
        var msg = "hello codesquad";
        console.log(msg);  //이 메시지는 즉시 실행되지 않습니다.
    }, 1000);
    console.log("end");
}

run();