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

// var keyDownArr = []
// var achieved = []

// function init() {
//   document.body.addEventListener('keydown', function(event){
//     console.log("keydown: "+ event.key)
    
//     if (keyDownArr.length === 10){
//       keyDownArr.shift()
//       keyDownArr.push(event.key)
//       konamiCodeAchieved()
//     }else {
//     keyDownArr.push(event.key)
//     }
    
//   })
// }

// function konamiCodeAchieved(){
//   for (let i=0; i<codes.length; i++){
//     if (codes[i] != keyDownArr[i]){
//       keyDownArr=[]
//     } else {
//       if (codes.length === keyDownArr.length){
//         alert("Fook")
//       }
//     }
//   }
  
  
  
var keys = [];
const body = document.body;
function init() {
   // your code here
}
  body.addEventListener('keydown', function(event) {
  keys.push(event.key);
  for(let i = 0; i< keys.length; i++){
    if(keys[i] != codes[i]){
      keys = [];
    }
  }
 
 if(keys.length == codes.length){
   alert('Hurray!');
 }
})