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

pokemonTwo.pokemonTwo();