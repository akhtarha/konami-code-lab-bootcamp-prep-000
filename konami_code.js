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
    if (keyDownArr ===10)
  })
  
  
}