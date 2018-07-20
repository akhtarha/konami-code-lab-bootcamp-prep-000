const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

var keyDownArr = []
var achieved = []

function init() {
  document.body.addEventListener('keydown', function(event){
    console.log("keydown: "+ event.key)
    
    if (keyDownArr.length === 10){
      keyDownArr.shift()
      keyDownArr.push(event.key)
      konamiCodeAchieved()
    }else {
    keyDownArr.push(event.key)
    }
    
  })
}

function konamiCodeAchieved(){
  var achieved = checkArr()
  if (achieved){
    alert("yes")
  }
}

function checkArr(){
    for (let i=0; i<codes.length; i++){
      if (codes[i]===keydownArr[i]){
        achieved.push(true)
      } else{
        achieved.push(false)
      } 
    }
  }