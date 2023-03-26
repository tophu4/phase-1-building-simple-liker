// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph")

// if a button in likeButtons is clicked, switch after successful server response
likeButtons.forEach(btn => {
  btn.addEventListener("click",() => {
    mimicServerCall()
    .then(res => {
      if(btn.innerHTML == EMPTY_HEART){
        btn.innerHTML = FULL_HEART;
        btn.classList.add("activated-heart")
      }
      else{
        btn.innerHTML = EMPTY_HEART;
        btn.classList.remove("activated-heart")
      }
    })
    .catch(error => {
      const errorModal = document.querySelector("#modal");
      const errorModalMessage = document.querySelector("#modal-message");

      errorModal.classList.remove("hidden");
      errorModalMessage.innerHTML = "server error";

      setTimeout(function(){
        errorModal.classList.add("hidden");
      },3000);
    })
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
