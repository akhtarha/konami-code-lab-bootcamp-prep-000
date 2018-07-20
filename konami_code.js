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
  
    function triggerKeyDown(key) {
    const keyboardEvent = new KeyboardEvent("keydown", { key });
    document.body.dispatchEvent(keyboardEvent);
  }
  
    for (let i = 0, l = codes.length; i < l; i++) {
        triggerKeyDown(codes[i]);
      }
  
  // your code here
  
  const body = document.body.addEventListener('keydown', function(event){
    window.alert("body was clicked!")
  })
  
}