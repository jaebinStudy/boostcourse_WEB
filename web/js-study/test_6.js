//브라우저에서는 HTML코드를 DOM(Document Object Model)이라는 객체형태의 모델로 저장한다.
// 그렇게 저장된 정보를 DOM Tree라고 한다.

//getElementById() -ID 정보를 통해서 찾을 수 있는 함수.

//Element.querySelector() - DOM을 찾는데 특히 유용한 querySelector 함수.

//css selector -selector문법은 querySelector와 querySelectorAll메서드에서 사용할 수 있으며  css 스타일을 부여했을 때 익혔던 selector문법과 동일하다

//Event 등록 표준방법.
var el = document.querySelector(".outside");
el.addEventListener("click", function(){
//do something..
}, false);

//이벤트 객체
var el = document.getElementById("outside");
el.addEventListener("click", function(evt){
    console.log(evt.target);
    console.log(evt.target.nodeName);
}, false);
//가장 많이 쓰이는 건 event.target이다.

