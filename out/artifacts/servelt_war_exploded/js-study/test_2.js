/*자바스크립트 비교,반복문*/
function howMany(selectObject) {
    var numberSelected = 0;
    for(var i =0;i<selectObject.length;i++){
        if(selectObject.option[i].selected){ //여기서 selected 키워드는 뭔지 몰겠음.
            numberSelected++;
        }
    }
    return numberSelected;
}
//문자열 처리
typeof "abc";  //string
typeof "a";    //string
typeof 'a';    //string. single quote도 사용가능.

//문자열에 대한 다양한 메서드
"ab:cd".split(":"); //["ab","cd"] 문자열을 분활하는 함수
"ab:cd".replace(":", "$"); //"ab$cd" 문자 변환 함수
" abcde  ".trim();  //"abcde" 좌우 공백제거 함수