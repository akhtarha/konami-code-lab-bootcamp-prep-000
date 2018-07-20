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
  
    
  
  
    for (let i = 0, l = codes.length; i < l; i++) {
      
      document.body.addEventListener('keydown', function(event){
      window.alert("body was clicked!")
  })
      
        triggerKeyDown(codes[i]);
      }
  

  
}