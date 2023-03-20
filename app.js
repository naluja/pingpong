let p1Score = document.querySelector("#left");
let score1 = 0;
let p2Score = document.querySelector("#right");
let score2 = 0;
let select = document.querySelector("#points");
let playTo = 3;

const p1Button = document.querySelector("#playerone");
const p2Button = document.querySelector("#playertwo");
const resetButton = document.querySelector('#reset');
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if(!isGameOver){
    score1++;
    if(score1 === playTo)
    {   isGameOver = true;
        p1Score.style.color = 'green';
        p2Score.style.color = 'red';
      
    }
    p1Score.innerHTML = score1;
    }
   
})
p2Button.addEventListener('click', function(){
    if(!isGameOver){
        score2++;
        if(score2 === playTo)
        {   isGameOver = true;
            p2Score.style.color = 'green';
            p1Score.style.color = 'red';
          
        }
        p2Score.innerHTML = score2;
        }
       
    })
   
select.addEventListener('change', function(){
    playTo = parseInt(this.value);
    reset();
})


resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    p1Score.innerHTML = 0;
    p2Score.innerHTML = 0;
    p1Score.style.color = 'black';
    p2Score.style.color = 'black';
}