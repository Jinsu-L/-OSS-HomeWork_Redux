# Redux Homework
*****
[![N|Solid](https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67)](https://deminoth.github.io/redux/)
*****
### Description
This project is my school homework!!
  
### React
Facebook에서 개발한 MVC프레임워크에서의 뷰 부분을 컴포넌트로 만들기 위한 라이브러리다. (유저 인터페이스 라이브러리)
    
### Virtual DOM
자바스크랩 내에 DOM Tree와 같은 구조체를 VIRTUAL DOM으로 갖고 있다. 
다시 그릴 때는 변경이 필요한 최소한의 요소만 DOM에 반영하기 때문에 빠르게 처리가 가능하다.


### Flux

![N|Solid](https://haruair.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

acebook에서 클라이언트-사이드 웹 어플리케이션을 만들기 위해 사용하는 어플리케이션 아키텍쳐다.
 
단방향 데이터 흐름을 활용해 뷰 컴포넌트를 구성하는 React를 보완하는 역할을 한다. 

이전까지의 프레임워크와는 달리 패턴과 같은 모습을 하고 있기 때문에 수많은 새로운 코드를 작성할 필요 없이 바로 Flux를 이용해 사용할 수 있다.

Flux 어플리케이션은 다음 핵심적인 세가지 부분으로 구성되어 있다: Dispatcher, Stores, Views(React 컴포넌트)

Flux는 MVC와 다르게 단방향으로 데이터가 흐른다. 

리덕스는 어플리케이션의 클라이언트쪽 state를 관리하기 위한 거대한 이벤트루프이다.

### Redux의 원리
어플리케이션 전체에는 store라는 커다란 하나의 state가 존재하는데 이것이 어플리케이션의 state를 총괄한다.

이 store의 state는 그 자체를 직접 변형할 수 없고, 오직 순수 함수인 리듀서로만 새로운 형태로 갈아치우는 것이 가능하다.

리듀서는 type과 payloads를 속성으로 갖는 단순 객체인 action이벤트가 발생했을 때에만 작동하며
action이벤트를 발생시키는 방법은 dispatch라는 함수에 단순 객체인 action을 넣는것으로 가능하게 한다.

dispatch(action) => 리듀서 작동 => store의 state변경 => 변경된 state가 state를 subscribe하고 있는 컴포넌트에 전달한다.    
    
### Redux의 특징
* 단 하나의 store만 존재한다. (flux는 여러개의 store 사용)
* store에 있는 state는 Read-only 속성이며, state를 핸들링 하려면 반드시 action을 통해서 해야한다.
* reducer는 pure function 해야 한다. (action객체를 처리하는 함수를 reducer라 부름)
* pure function이라 함은, 함수 내부로직에 네트워크 통신이나 데이터베이스 접근 등… 행위가 이루어지지 않음을 뜻함.)
* reducer는 action에서 받은 정보를 어떻게 업데이트 할지만 정의.
* reducer는 여러개 존재가능.

    
### Redux의 장점
가장 먼저, application state의 변화가 예측가능하게 변한다는 점이다.

이는 특정 액션이벤트 발생에만 reducer가 작동하게 했기때문에 store state가 변한경우 그것이 정확히 어떠한 액션 이벤트로 부터변경된 것인지 알 수 있다.

또한, 정확히 어떤 액션 이벤트로 부터 변경된 것인지 알기 때문에 Time travel debugging이 가능해진다. 간단하게 얘기하자면 이제까지 store state가 변화해온 과정을 마치 뒤로가기 버튼이 있는것 처럼 하나하나 확인해볼 수 있는 것이다.

그리고, 리듀서가 순수 함수(외부에 영향을 끼치지 않는 함수. ex: api calling이 없는 함수)이기 때문에 test코드를 짤 수 있다는 장점도 존재한다.