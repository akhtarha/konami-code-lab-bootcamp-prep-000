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

function init() {
  
document.addEventListener("ArrowUp", function(){
    document.getElementById("demo").innerHTML = Date();
});
  
  
  //   for (let i = 0, l = codes.length; i < l; i++) {
      
  //     document.body.addEventListener('ArrowUp', function(event){
  //     window.alert("body was clicked!")
  // })
      
  //     }
  

  
}