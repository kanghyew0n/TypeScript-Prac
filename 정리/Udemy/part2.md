# React wid TypeScript

### 함수형 컴포넌트에서의 타입 (강의 420)
* 함수형 컴포넌트에 타입을 지정해 줄 때 
* FC의 의미 : FunctionComponent
* FC는 이미 Generic type이다.
* 이 함수가 함수형 컴포넌트로 동작한다는 것을 명확히 할 수 있음

```js
const Todos: React.FC = (props) => {
  return (
    ...
  );
}
```