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
  if (_.isEqual(codes, keyDownArr)){
  console.log("yes it has been achieved")
  }
}