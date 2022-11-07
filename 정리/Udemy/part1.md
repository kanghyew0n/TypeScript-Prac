
# TypeScript 사용하는 이유
* TypeScript는 정적 타입의 특징을 가지고 있다 → 이름도 여기서 유래되었다
* TS : 정적타입 / JS : 동적타입 이라는 차이점을 가지고 있다.
* 동적타입의 JS : 함수를 선언할때 타입을 정하지 않고 코드를 실행한다, 이때 다른 타입이 들어가도 함수는 실행될 수 있다 →  이런 문제점을 보완하기 위해 정적타입이 필요하다.
* 대규모 프로젝트에서 의도하지 않게 사용 될 수 있다!

<br/>

# TypeScript 시작하기 
```js
npm install typescript
```
* TS는 브라우저에서 실행되지 않는다 npx tscJS 형태로 컴파일 해야한다 → 컴파일러 필요!
```js
npx tsc 파일명
```

<br/>

# Type 
### 1️⃣ Primitives 
* numebr, string, boolean, null, undefined (symbol)
* 타입을 지정할때는 소문자로 지정하기 (대문자로 지정해도 에러가 나지 않음 → Number 객체를 가리키게 됨)
### 2️⃣ More complex types
* 문자열 배열 : string[], 넘버 배열 : number[]
* 객체 : 객체의 key 에 해당하는 value의 타입을 지정할 수 있다.
```js
// 객체
let person: {
  name: string;
  age: number;
} = {
  name: "hyewon",
  age: 24,
};

// 객체 배열
let people : {
  name: string;
  age: number;
}[]
```

<br/>

# Type Inference
* 변수 선언시 `let name = 'kanghyewon`
* 이럴 경우 타입 추론이 가능하다!
* 추론이 가능 할 경우 타입은 굳이 쓰지 않는 것이 좋음

<br/>

# 유니온 타입
* 하나의 변수에 여러 타입을 지정할 수 있음
* `let name : string | string[]`

<br/>

# Type Aliases
* 반복해서 타입을 정하는 대신 BASE 타입을 지정해서 사용 가능
```js
type Person =  {
  name: string;
  age: number;
}

let people :Person[] // 이런식으로도 가능함
```

<br/>

# 함수 및 함수 유형
1. 타입을 가진 함수 
2. generic 타입

<br/>

### 1️⃣ Function & Type
```js
function add(a : number, b : number)  {
  return a + b;
}
```
* 매개변수의 타입을 지정할 수도 있다 → 반환값에 대한 타입이 추론 가능하다!
* 타입스크립트가 타입 추론이 가능하다면 굳이 명시적으로 정의 할 필요가 없다!
* 함수의 타입을 생각할때는 매개변수 타입 뿐만 아니라 반환값의 타입도 생각해야한다.

<br/>

```js
function printOutput(value : any)  {
  console.log(value)
}
```
* 함수가 아무것도 반환하지 않음 → void 특수타입

<br/>

### 2️⃣ Generic 타입
```js
function insertAtBeginning(array : any[], value : any)  {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
```
* 결과적으로 updatedArray는 숫자로만 이루어진 배열 (number[]) 이지만 타입 스크립트는 인지하지 못함 → `insertAtBeginning(array : any[], value : any)` any 타입으로 지정되어있기 때문! → 이럴 경우 타입스크립트의 지원을 받을 수 없기 떄문에 에러를 잡아주지 않음!
* 이러한 현상을 해결하기 위한 것 : Generic 타입
```js
function insertAtBeginning<T>(array : T[], value : T)  {
...
}
```
* 타입 추론이 가능해짐


<br/>

<br/>



