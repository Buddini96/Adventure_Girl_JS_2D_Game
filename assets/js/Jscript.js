  var girl = document.getElementById("girl");

  var idleImageNumber = 1;
  var idleAnimationNumber = 0;


    //Idle animation
    function idleAnimation(){
        idleImageNumber  = idleImageNumber + 1;
        if (idleImageNumber == 11){
            idleImageNumber = 1;
        }
        girl.src = "./assets/images/Idle("+idleImageNumber+").png";
    }

    function idleAnimationStart(){
        idleAnimationNumber = setInterval(idleAnimation,100);
    }


    ////////////////////Run Animation////////////////////////////////////////

     var runImageNumber = 1;
     var runAnimationNumber = 0;

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

    //////////////Jump Animation//////////////////////

     var jumpAnimationNumber = 0;
     var jumpImageNumber = 0;
     var girlMarginTop = 450;/*417*/

    function jumpAnimation(){
        jumpImageNumber  = jumpImageNumber + 1;

        if (jumpImageNumber <= 6){
            girlMarginTop = girlMarginTop - 50;
            girl.style.marginTop = girlMarginTop + "px";
        }

        if (jumpImageNumber >= 7){
            girlMarginTop = girlMarginTop + 50;
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

     function jumpAnimationStart(){
         clearInterval(idleAnimationNumber);
         runImageNumber=0;
         clearInterval(runAnimationNumber);
         jumpAnimationNumber = setInterval(jumpAnimation,250);
     }


     //Slide Animation
     var slideAnimationNumber = 0;
     var slideImageNumber = 1;
    var girlMarginTop1 = 420;

     function slideAnimation(){
         slideImageNumber  = slideImageNumber + 1;

         if (slideImageNumber <= 2){
             girlMarginTop1 = girlMarginTop1 - 0;
             girl.style.marginTop = girlMarginTop1 + "px";
         }

         // if (slideImageNumber >= 2){
         //     girlMarginTop = girlMarginTop - 5;
         //     girl.style.marginTop = girlMarginTop + "px";
         // }
         if (slideImageNumber == 5){
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
         slideAnimationNumber = setInterval(slideAnimation,200);
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
            if (dragonAnimationId == 0){
                dragonAnimationId = setInterval(dragonAnimation,100);
            }
            if (dragon1AnimationId == 0){
                dragon1AnimationId = setInterval(dragon1Animation,100);
            }
        }


        if (keyCode == 32){
            if(jumpAnimationNumber == 0){
                jumpAnimationStart();
            }
            if (moveBackgroundAnimationId == 0){
                moveBackgroundAnimationId = setInterval(moveBackground,100);
            }
            if (dragonAnimationId == 0){
                dragonAnimationId = setInterval(dragonAnimation,250);
            }
            if (dragon1AnimationId == 0){
                dragon1AnimationId = setInterval(dragon1Animation,100);
            }

        }

        if (keyCode == 122){
            if(slideAnimationNumber == 0){
                slideAnimationStart();
            }
            if (moveBackgroundAnimationId == 0){
                moveBackgroundAnimationId = setInterval(moveBackground,100);
            }
            if (dragonAnimationId == 0){
                dragonAnimationId = setInterval(dragonAnimation,200);
            }
            if (dragon1AnimationId == 0){
                dragon1AnimationId = setInterval(dragon1Animation,200);
            }

        }
    }

    var backgroundImagePositionX = 0;
    var moveBackgroundAnimationId = 0;
    var score = 0;

    function moveBackground(){
        backgroundImagePositionX = backgroundImagePositionX - 20;
        document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

        score = score + 1;
        document.getElementById("score").innerHTML = score;
    }

    var dragonMarginLeft = 1600;


    //Add down Barrier
    function createDragon(){

        for (var i = 0; i <= 30; i++) {
            var box = document.createElement("div");
            box.className = "box";
            document.getElementById("background").appendChild(box);
            box.style.marginLeft = dragonMarginLeft + "px";
            box.id = "box"+i;

            // dragonMarginLeft = dragonMarginLeft + 1000;

            if(i < 15){
                dragonMarginLeft = dragonMarginLeft + 1000;
            }

            if (i >=15 ){
                dragonMarginLeft = dragonMarginLeft + 800;
            }
        }

    }

    var dragonAnimationId = 0;

    function dragonAnimation(){
        for (var i = 0; i < 30; i++) {
            var box = document.getElementById("box"+i);
            var currentMarginLeft = getComputedStyle(box).marginLeft;
            var newMarginLeft = parseInt(currentMarginLeft)-25;
            box.style.marginLeft = newMarginLeft + "px";

            if (newMarginLeft >= -110 & newMarginLeft <= 100){
                if (girlMarginTop > 300){
                    clearInterval(dragonAnimationId);

                    clearInterval(runAnimationNumber);
                    runAnimationNumber = -1;

                    clearInterval(jumpAnimationNumber);
                    jumpAnimationNumber = -1;

                    clearInterval(moveBackgroundAnimationId);
                    moveBackgroundAnimationId = -1;

                    deadAnimationNumber = setInterval(girlDeadAnimation,200)

                }
            }

        }
    }



    //////////////////////////////////////////////////////////////////////////
    //Add Up Barrier

    dragon1MarginLeft = 1800;//1800

    function createDragon1(){

        for (var i = 0; i < 20; i++) {
            var dragon1 = document.createElement("div");
            dragon1.className = "dragon1";
            document.getElementById("background").appendChild(dragon1);
            dragon1.style.marginLeft = dragon1MarginLeft + "px";
            dragon1.id = "dragon1" + i;

            // dragon1MarginLeft = dragon1MarginLeft + 1600;

            if (i < 5 ){
                dragon1MarginLeft = dragon1MarginLeft + 1800;//2100
            }
            if (i >= 5 ){
                dragon1MarginLeft = dragon1MarginLeft + 1200 ;//800
            }
        }
    }


    var dragon1AnimationId = 0;

    function dragon1Animation(){
        for (var i = 0; i < 20; i++) {
            var dragon1 = document.getElementById("dragon1"+i);
            var currentMarginLeft = getComputedStyle(dragon1).marginLeft;
            var newMarginLeft = parseInt(currentMarginLeft)-20;
            dragon1.style.marginLeft = newMarginLeft + "px";
        }

    }

    //Dead Animation

    var deadImageNumber = 1;
    var deadAnimationNumber = 0;
    function girlDeadAnimation(){
        deadImageNumber = deadImageNumber + 1;

        if (deadImageNumber == 11){
            deadImageNumber = 10;

            document.getElementById("end").style.visibility = "visible";
            document.getElementById("endScore").innerHTML  = score;
        }
        girl.src = "./assets/images/Dead("+deadImageNumber+").png";
    }

    function reload(){
        location.reload();
    }








