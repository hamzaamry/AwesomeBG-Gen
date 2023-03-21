window.onload = function () {

const colors = ["linear-gradient(to top, #30cfd0 0%, #330867 100%)","linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)","linear-gradient(120deg, #f6d365 0%, #fda085 100%)","linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)","linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"] ;
var btn = document.getElementById("btn-changer") ; 
var bGName = document.getElementById("bgName") ;

if(btn){
    btn.addEventListener("click" ,function(){
        randomNumber = Math.floor(Math.random() * 5) ;
        document.body.style.backgroundImage = colors[randomNumber] ;
        document.body.style.backgroundAttachment = fixed ;
        bGName.textContent = colors[randomNumber] ;
    
    });
}

document.querySelector(".btn-copy").addEventListener("click", copyText);

function copyText() {
  const text = document.querySelector("#bgName").textContent;
  navigator.clipboard.writeText(text).then(
    function() {
      console.log("Copied!");
      document.querySelector(".popup").style.display = "block";
      setTimeout(function(){
        document.querySelector(".popup").style.display = "none";
      }, 1500);
    },
  );
}


}


