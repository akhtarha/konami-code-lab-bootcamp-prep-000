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
  
}
  document.body.addEventListener('keydown', function(event){
  console.log("key dispatched: "+ event.key)
  console.log(keyDownArr.length)
  keyDownArr.push(event.key)
  
  if (keyDownArr.length >= 10) {
    for (let i=0; i<10; i++){
      console.log("index="+i+": "+codes[i]+ " == "+ keyDownArr[i])
      if (codes[i] == keyDownArr[(keyDownArr.length-10)+i]){
        alert('something')
      }
      
      
    }
    
  }
    
  })


// var keys = [];
// const body = document.body;
// function init() {
//   // your code here
// }
//   body.addEventListener('keydown', function(event) {
//   keys.push(event.key);
//   for(let i = 0; i< keys.length; i++){
//     if(keys[i] != codes[i]){
//       keys = [];
//     }
//   }
 
// if(keys.length == codes.length){
//   alert('Hurray!');
// }
// })