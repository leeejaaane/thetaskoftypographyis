
let dancingWords = [];

class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
  
  }

  brownian() {
    this.x += random(0, 0);
    this.y += random(0, 0);
    this.element.position(this.x, this.y+120);
  }
}

function setup() {
  // 이 단락은 위의 주요 코드 블록의 부록으로서 작성됩니다.
  // 아래의 코드들은 요소의 생성과 지정 기능을 구분합니다.
  // 지정된 요소들은 p5js로 별도 생성될 필요가 없으며,
  // 일반적인 HTML처럼 쓰일 수 있습니다.
  createP(
    'The task of typography is to enlarge the concept (representation) of the text, to broaden it. This means that the idea (meaning) of the message to be transmitted through the material will be conveyed in a more exact, detailed and perceptive way than would be possible through language alone. Manfred Kröplien, 1968'
  ).addClass('text').hide();

  // 이 줄은 금방 생성된 '단락'을 받지만,
  // 동시에 HTML 페이지상 'text' 클래스를 가진 다른 요소들을 받아오기도 합니다.
  const texts = selectAll('.text');

  for (let i = 0; i < texts.length; i++) {
    const paragraph = texts[i].html();
    const words = paragraph.split(' ');
    for (let j = 0; j < words.length; j++) {
      const spannedWord = createSpan(words[j]);
      const dw = new DanceSpan(spannedWord, random(2000), random(730));
      dancingWords.push(dw);
    }
  }
}

function draw() {

  for (let i = 0; i < dancingWords.length; i++) {
    dancingWords[i].brownian();
    
    
  }
  

  
  
}
