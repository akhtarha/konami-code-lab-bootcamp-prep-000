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
  var achieved = checkArr(codes, keyDownArr)
  if (achieved){
  alert("yes it has been achieved")
  }
}

function checkArr(codes, keyDownArr){
    codes.every(function(value, index){ 
    return value === keyDownArr[index]})
  }