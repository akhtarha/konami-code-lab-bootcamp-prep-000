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
  console.log(codes.length===keyDownArr.length)
  
  keyDownArr.push(event.key)
  console.log("keyDownArrlength: "+ keyDownArr.length+ ", keyDownArr: "+keyDownArr)
  
    for (let i=0; i<codes.length; i++){
      if (codes[i] != keyDownArr[i]){
        console.log("index="+i+": "+codes[i]+ " == "+ keyDownArr[i])
        //keyDownArr=[]
      }
      
      if (codes.length === keyDownArr.length){
          alert("Fook");
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