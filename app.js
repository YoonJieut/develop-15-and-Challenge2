const pokemonOne = {
  name:"피카츄",
  pokemonOne : function(){
    console.log(this.name);
  }
};

// * 나의 예상 : 객체에 속한 메소드이기 때문에, 잘 작동하여 피카츄가 나타날 것이다.
pokemonOne.pokemonOne();

/**
 * pokemonOne 이라는 객체 리터럴에는 2개의 프로퍼티(property)가 존재한다.
 * name이라는 key와 pokemonOne이라는 함수가 존재한다.
 * 
 * ! 함수는 객체의 키의 위치에 있으므로, 메서드라고 부른다.
 * 메서드 pokemonOne()은 콘솔에 기록을 내는 간단한 기능
 * 콘솔의 매개변수로 this.name을 넘겨주었다.
 * 
 * 여기서 this는 객체 리터럴의 식별자인 객체 pokemonOne이다.
 * 그러므로 아래의 메서드 호출은 정상적으로 '피카츄'가 출력된다.
 */


const pokemonTwo = {
  name : "라이츄",
  pokemonTwo : ()=>{
    console.log(this.name);
  }
};

// * 나의 예상 : 화살표 함수는 상위 스코프로 바인드를 올려주기 때문에 global이 뜰 것이다.
// ! 해설 : node.js의 최상위는 global이라는 객체가 존재하지만, name key 값도 존재하며 그 value값은 undefinde이다. 답 : undefined
pokemonTwo.pokemonTwo();

/**
 * 비교 예제 pokemonOne과 비교점이 존재한다.
 * 바로 메서드 pokemonTwo 함수 선언 방식이 화살표 함수라는 것
 * 
 * 화살표 함수는 this 바인딩(묶어내지)하지 않는다.
 * 따라서 pokemonOne() 메서드와 다르게 pokemonTwo() 함수의 this는 전역 객체를 가르킨다.
 * 
 * 바인딩 한다는 단어가 매우 낯설은데, 이것을 'this 키워드가 가리키는 것'
 * 을 판단하는 과정으로, 여기서의 this는 객체 리터럴 pokemonTwo의 상위 영역인 전역 객체를 가리킨다.
 * 
 * Node.js의 최상위 전역객체는 global 객체이고, browser의 최상위 객체는 window객체이다.
 * 가리키는 영역이 다르기 때문에, 필요에 따라 this를 사용하는 방식이 달라진다.
 * 
 * 아래의 메서드 호출은 global 전역 객체에 name이라는 키가 없으므로 undefined가 출력된다.
 */
