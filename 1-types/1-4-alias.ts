{
  /**
   * Type Aliases : 새로운 타입을 내가 정의하는것
   */
  // 원시타입
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  // 오브젝트도 가능하다.
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literal Types
   */
  // Name에 'name'을 할당하여 ellieName을 Name자료형으로 설정하면 'name' string 값만이 들어가는 변수가 된다.
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
