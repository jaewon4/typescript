{
  // Generic
  // 1. 함수를 정의할 때 타입을 명시하지 않고, 호출할 때 타입을 지정하는 방법
  function getArrayLength(x) {
    return x.length;
  }

  const numArray = [1, 2, 3];
  const strArray = ["hello", "world"];
  const objArray = [{ name: "Jack" }, { name: "Jane" }];

  console.log(getArrayLength(numArray));
  console.log(getArrayLength(strArray));
  console.log(getArrayLength(objArray));

  // 2. 타입을 명시하는 방법
  type ArrayType = string[] | number[] | object[];

  function getArrayLength2(x: ArrayType) {
    return x.length;
  }

  console.log(getArrayLength2(numArray));
  console.log(getArrayLength2(strArray));
  console.log(getArrayLength2(objArray));

  // 3. 제네릭을 사용하는 방법
  function getArrayLength3<T>(x: T[]) {
    return x.length;
  }

  console.log(getArrayLength3<number>(numArray));
  console.log(getArrayLength3<string>(strArray));
  console.log(getArrayLength3<object>(objArray));

  // 4. 제네릭을 사용하는 객체
  interface Moboile<T> {
    name: string;
    price: number;
    option: T;
  }

  const m1: Moboile<object> = {
    name: "Galaxy",
    price: 100,
    option: { color: "black", memory: 128 },
  };

  const m2: Moboile<number> = {
    name: "iPhone",
    price: 200,
    option: 256,
  };

  console.log(m1);
  console.log(m2);

  //
  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = { name: "Jack", age: 32 };
  const car: Car = { name: "Sonata", color: "White" };
  const book: Book = { price: 10000 };

  // extends 키워드를 사용하여 제네릭 타입을 제한할 수 있다.
  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }

  console.log(showName(user));
  console.log(showName(car));
  // console.log(showName(book));
}
