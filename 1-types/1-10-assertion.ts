{
  /**
   * Type Assertions 💩 : 사용권장되지 않는다.
   */
  function jsStrFunc(): any {
    return 2;
    // return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 이유 : result의 return값이 string이었는데 숫자가 오더라도 에러가 나오지 않는다.
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  // undefined 또는 numbers배열이 리턴이되는 함수인다. 배열 리턴을 확신한다면 !를 이용강제할수있다.
  const numbers = findNumbers()!;
  numbers.push(2); // 😱

  // 좋은 예제 : 버튼이 진짜로 존재하는 경우를 장담할때 !를 활용한 경우
  const button = document.querySelector("class")!;
}
