 var girl = document.getElementById("girl");

  idleImageNumber = 0;
  idleAnimationNumber = 0;

    function idleAnimation(){
        idleImageNumber  = idleImageNumber + 1;
        if (idleImageNumber == 11){
            idleImageNumber = 1;
        }
        girl.src = "assests/imges/idle ("+idleImageNumber+").png";
    }

    function idleAnimationStart(){
        idleAnimationNumber = setInterval(idleAnimation,200);
    }
