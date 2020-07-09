/*자바 스크립트 변수*/
var a = 2;
var a = "aaa";
var a = 'aaa';
var a = true;
var a = [];
var a = {}; //객체
var a = undefined;

//자바 스크립트 연산자
const name = "crong"
const result = name || "codesquad";
console.log(result);
var name = "";
var result = name || "codesquad";
console.log(result);

//삼항연산자
const data = 11;
const result = (data > 10) ? "ok" : "fail";
console.log(result);

//비교연산자
0 == false;
0 === false; //== 보다 ===를 많이쓴다.
null == false;
0 == "0";
0 === "0";
null == undefined;
/*자바스크립트 타입 (타입은 선언할때가 아닌 실행할때 결정된다.)
undefined,null,boolean,number,string,object,function,array,Date,RegExp
toString.call 함수를 이용 해서 타입 체크 ,문자나 숫자와 같은 기본타입은 type of 키워드를 사용한다.
배열은 isArray함수로 타입을 체크한다.
 */