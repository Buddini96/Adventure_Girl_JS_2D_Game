 var girl = document.getElementById("girl");

  idleImageNumber = 1;
  idleAnimationNumber = 0;
  runImageNumber = 1;
  runAnimationNumber = 0;
  jumpAnimationNumber = 0;
  jumpImageNumber = 1;
  slideAnimationNumber = 0;
  slideImageNumber = 1;


    //Idle animation
    function idleAnimation(){
        idleImageNumber  = idleImageNumber + 1;
        if (idleImageNumber == 11){
            idleImageNumber = 1;
        }
        girl.src = "./assets/images/Idle("+idleImageNumber+").png";
    }

    function idleAnimationStart(){
        idleAnimationNumber = setInterval(idleAnimation,200);
    }


    //Run Animation
    function runAnimation(){
        runImageNumber  = runImageNumber + 1;
        if (runImageNumber == 9){
            runImageNumber = 1;
        }
        girl.src = "./assets/images/Run("+runImageNumber+").png";
    }

    function runAnimationStart(){
        runAnimationNumber = setInterval(runAnimation,100);
        clearInterval(idleAnimationNumber);
    }

    girlMarginTop = 417;

    function jumpAnimation(){
        jumpImageNumber  = jumpImageNumber + 1;

        if (jumpImageNumber <= 6){
            girlMarginTop = girlMarginTop - 20;
            girl.style.marginTop = girlMarginTop + "px";
        }

        if (jumpImageNumber >= 7){
            girlMarginTop = girlMarginTop + 20;
            girl.style.marginTop = girlMarginTop + "px";
        }
        if (jumpImageNumber == 11){
            jumpImageNumber = 1;
            clearInterval(jumpAnimationNumber);
            jumpAnimationNumber = 0;
            runImageNumber = 0;
            runAnimationStart();
        }
        girl.src = "./assets/images/Jump("+jumpImageNumber+").png";
    }

     //Slide Animation
     function slideAnimation(){
         slideImageNumber  = slideImageNumber + 1;

         // if (slideImageNumber <= 2){
         //     girlMarginTop = girlMarginTop + 5;
         //     girl.style.marginTop = girlMarginTop + "px";
         // }
         //
         // if (slideImageNumber >= 5){
         //     girlMarginTop = girlMarginTop + 5;
         //     girl.style.marginTop = girlMarginTop + "px";
         // }
         if (slideImageNumber == 4){
             slideImageNumber = 1;
             clearInterval(slideAnimationNumber);
             slideAnimationNumber = 0;
             slideImageNumber = 0;
             runAnimationStart();
         }
         girl.src = "./assets/images/Slide("+slideImageNumber+").png";
     }

     function slideAnimationStart(){
         clearInterval(runAnimationNumber);
         runImageNumber=0;
         clearInterval(runAnimationNumber);
         slideAnimationNumber = setInterval(slideAnimation,100);
     }

    function jumpAnimationStart(){
        clearInterval(idleAnimationNumber);
        runImageNumber=0;
        clearInterval(runAnimationNumber);
        jumpAnimationNumber = setInterval(jumpAnimation,100);
    }

    function keyCheck(event){
        // alert(event.which);
        //enter button key code 13
        //space button key code 32
        //z button key code 122 - slide

        var keyCode = event.which;

        if (keyCode == 13){
            if (runAnimationNumber == 0){
                runAnimationStart();
            }
            if (moveBackgroundAnimationId == 0){
                moveBackgroundAnimationId = setInterval(moveBackground,100);
            }
            if (boxAnimationId == 0){
                boxAnimationId = setInterval(boxAnimation,100);
            }
        }


        if (keyCode == 32){
            if(jumpAnimationNumber == 0){
                jumpAnimationStart();
            }
            if (moveBackgroundAnimationId == 0){
                moveBackgroundAnimationId = setInterval(moveBackground,100);
            }
            if (boxAnimationId == 0){
                boxAnimationId = setInterval(boxAnimation,100);
            }
        }

        if (keyCode == 122){
            if(slideAnimationNumber == 0){
                slideAnimationStart();
            }
            if (moveBackgroundAnimationId == 0){
                moveBackgroundAnimationId = setInterval(moveBackground,100);
            }
            if (boxAnimationId == 0){
                boxAnimationId = setInterval(boxAnimation,100);
            }
        }
    }

    var backgroundImagePositionX = 0;
    var moveBackgroundAnimationId = 0;
    function moveBackground(){
        backgroundImagePositionX = backgroundImagePositionX - 20;
        document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
    }

    boxMarginLeft = 1600;


    //Add Barriers
    function createBoxes(){

        for (var i = 0; i <= 10; i++) {
            var box = document.createElement("div");
            box.className = "box";
            document.getElementById("background").appendChild(box);
            box.style.marginLeft = boxMarginLeft + "px";
            box.id = "box"+i;

            // boxMarginLeft = boxMarginLeft + 1000;

            if(i < 5){
                boxMarginLeft = boxMarginLeft + 1000;
            }

            if (i >=5 ){
                boxMarginLeft = boxMarginLeft + 500;
            }
        }

    }

    var boxAnimationId = 0;

    function boxAnimation(){
        for (var i = 0; i < 10; i++) {
            var box = document.getElementById("box"+i);
            var currentMarginLeft = getComputedStyle(box).marginLeft;
            var newMarginLeft = parseInt(currentMarginLeft)-25;
            box.style.marginLeft = newMarginLeft + "px";
        }
    }




