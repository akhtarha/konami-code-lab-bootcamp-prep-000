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
    
    if (keyDownArr ===10){
      keyDownArr.push(event.key)
      keyDownArr.shift()
      
      for (let i=0; i<codes.length; i++){
        if (codes[i]===keydownArr[i]){
          
      }
    } else {
      keyDownArr.push(event.key)
    }
    
      
      }
    }
  })
  
  
}