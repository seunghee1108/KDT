// 1번 함수
// 어떠한 숫자 값을 판단한다.
function calcFunc(first, second) {
  // 위 매개변수 두개는 데이터타입이 숫자여야만 한다.
  // 둘 중 큰값을 결정하여 리턴한다.
  if(typeof(first) === "number" && typeof(second) === "number"){
  let value = Math.max(first,second)
  return value; 
  }
}
console.log(calcFunc(3,4));
calcFunc(3,4);
// 2번 함수 
// 태그를 제작하는 과정에서 위 1번함수의 결정된 값을 활용한다.
function makeElement(tagName, sizeValue) {
  // tagName 매개변수는 반드시 문자열이어야 한다.
  // sizevalue 매개변수는 반드시 숫자여야 한다.
  // 태그요소를 생성하고, style값 중, 
  // width 값과 height 값을 매개변수 sizeValue + px 형태로 활용한다.
  if(typeof(tagName) === "string" && typeof(sizeValue) === "number") {
  let makeElement = document.createElement(tagName)
  makeElement.style.width = sizeValue + "px"
  makeElement.style.height = sizeValue + "px"
  return makeElement;
  }
  // 실행구문
}
console.log(makeElement("div", calcFunc(3,4)));
makeElement("div", calcFunc(3,4));
// 1번에서 값이 나오면 그 값이 sizeValue에 들어와야된다. a(tagName)라는 이름의 태그를 만들어라
// width. height값이 첫번째함수의 결과값이 나와야한다. 
// value  = 결과값

// 2번 함수 : 

// createElement 태그 생성하다.

// // 3번 함수
// // 제작된 태그를 부모태그에 해당하는 객체에 아래의 실행함수로 작동시킨다.
// function appendParent(parentElement, makeItemElement) {
//   // 위 매개변수 두개는 데이터타입이 객체여야만 한다.
//   parentElement.appendChild(makeItemElement); 
// }
// 2번 함수의 결과값이 makeItemElement가 되는 것이다.
