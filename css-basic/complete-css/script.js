    function restart() {
        window.location.href = "../CSSBasic/01-selectors/index.html";
    }

    function nextLevel() {
      window.location.href = "../CSSBasic/01-selectors/index.html";
    }

      for(let i=0; i<80; i++){
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random()*100 + "vw";
      confetti.style.animationDuration = (Math.random()*3+2)+"s";
      confetti.style.background = ["#ff0","#f00","#0f0","#0ff","#fff"][Math.floor(Math.random()*5)];
      document.body.appendChild(confetti);
    }