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

function init() {
  document.body.addEventListener('keydown', function(event){
    console.log("keydown: "+ event.key)
    
    if (keyDownArr.length === 10){
      keyDownArr.shift()
      keyDownArr.push(event.key)
    }
})}

function checkArr(){
    for (let i=0; i<codes.length; i++){
      if (codes[i]===keydownArr[i]){
        
      }  
    }
  } else {
    keyDownArr.push(event.key)
  }
}