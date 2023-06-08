{
  /**
   * Enum : 타입스크립트에서는 가능한한 쓰지 않는것이 좋다. -> 타입이 정확히 보장되지 않는다.
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // 현재는 0~6까지 이지만 1부터 시작하게도 만들수 있고 문자열을 각각의 변수에 적어둘수도 있다.
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  // 사용이 권장되지 않는 이유 : 아래 코드는 day에 1이라는 값이 들어가 있는데 아래 day에 또다시 enum에 없는 10을 할당하여도 컴파일 에러가 발생하지 않는다.
  day = Days.Tuesday;
  // day = 10;
  console.log(day);

  // 그래서 대신에 union string literal로 대신 사용이 가능하기에 주로 활용을 한다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}
