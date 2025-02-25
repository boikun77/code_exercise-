// 문제 : 전달받은 인수를 반대로 뒤집는 함수를 작성하시오.
// 단, 전달받을 인수는 문자열 한글자씩 으로 구분된 배열 형태입니다.

function solution(s) {
  let oppo = s.reverse();
  return oppo;
}

console.log(solution(["h", "e", "l", "l", "o"]));
// 알고리즘 4-2 풀이 note:

// 1. 전달받을 인수가 문자열 한글자씩 으로 구분된 배열 이라면 우선 배열을 문자열로 전환 시킨뒤
// 뒤집기를 사용해야될 듯 하다. 가장 먼저 떠오르는 것은 스프레드 문법....
// 잠시, 문제를 보니 받은 배열을 그저 반대로 돌리면 되는 문제인거 같은데..?
// 그럼 배열을 뒤집는 메서드인 reverse 를 사용하면 해결되는 문제 아닌가??
// 내가 문제를 잘못 이해 한건지는 모르겠다.. 튼 원하는 output 반환 완료..
