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
  
  
  document.onkeydown = checkKey;
  
  function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
          document.getElementById("demo").innerHTML = Date();
        alert("body was clicked!");
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }

}


// document.addEventListener("onkeydown", function(){
//     document.getElementById("demo").innerHTML = Date();
// });
  
  
  //   for (let i = 0, l = codes.length; i < l; i++) {
      
  //     document.body.addEventListener('ArrowUp', function(event){
  //     window.alert("body was clicked!")
  // })
      
  //     }
  

  
}