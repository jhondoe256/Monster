document.querySelector(".closedLEye").classList.remove;
var hasFlappedWing=false;
let  inLove=false;

setInterval(function(){
    if(!hasFlappedWing){

         $(".rWing").css("transform","rotate(90deg");
         $(".lLowerWing").css("transform","rotate(-90deg");
        }    
        else{
            $(".rWing").css("transform","rotate(25deg");
            $(".lLowerWing").css("transform","rotate(40deg");
            
    }

    hasFlappedWing=!hasFlappedWing;
},500);


// $(".head").mousemove(function(e){
// var x =e.page
// });


// $(window).load(function(){
//     $(document).mousemove(function(e){
//         console.log("This is running?");
//         var x =e.pageX;
//         var y = e.pageY;
//         $(".head").css("margin-left",x);
//         $(".head").css("margin-top",y);
//     });
// });


var head = $(".head");
head.mousemove(function(event){
var coordsX = event.clientX;
var coordsY =event.clientY;

head.css("left",coordsX);
head.css("top",coordsY);


});

var hideEyeStyle={
    "z-index":"-20",
};


var hideEyeStyle2={
    
    "right":"300000000px"
};
var RevealEyeStyle={
    "z-index":"20",
    
};

let facialExpressionHideClosedEyes=function(){
    $(".closedLEye").css(hideEyeStyle);
    $(".closedREye").css(hideEyeStyle);

   
};

let facialExpressionRevealClosedEyes=function(){
    $(".closedLEye").css(RevealEyeStyle);
    $(".closedREye").css(RevealEyeStyle);
    $(".closedREye").css("left","270px");
    $(".closedREye").css("top","180px");
    $(".closedLEye").css("left","100px");
    $(".closedLEye").css("top","180px");
    document.querySelector(".closedREye").style.width="70px";

   
};

let facialExpressionHideOpenEyes=function(){
    document.querySelector("#WRightEye").classList.remove("wRightEye");
    document.querySelector("#WLeftEye").classList.remove("wLeftEye");
   
    document.querySelector(".Eye").classList.remove("rEye");
    document.querySelector(".LEye").classList.remove("lEye");
// a   document.querySelector("#ClosedREye").classList.remove(".closedReye");
//    facialExpressionHideClosedEyes();
    facialExpressionHideClosedEyes();

};



let facialExpressionOpenEyes=function(){
    // $(".rEye").css(RevealEyeStyle);
    // $(".lEye").css(RevealEyeStyle);
    // 
    
    document.querySelector("#WRightEye").classList.add("wRightEye");
    document.querySelector("#WLeftEye").classList.add("wLeftEye");
   
    document.querySelector(".Eye").classList.add("rEye");
    document.querySelector(".LEye").classList.add("lEye");
    // facialExpressionHideClosedEyes();
    // document.querySelector("#ClosedREye").classList.remove(".closedReye");

  
    $(".closedREye").css("left"," 0px");
    $(".closedREye").css("top","0");
    $(".closedLEye").css("left","00px");
    $(".closedLEye").css("top","0");
    facialExpressionHideClosedEyes();
};

facialExpressionHideClosedEyes();



document.addEventListener("keyup",event=>{
    if(event.keyCode===65){
        inLove=true;
        if(inLove){
            facialExpressionHideOpenEyes();
            facialExpressionRevealClosedEyes();
            
           }
    }
   
});


document.addEventListener("keyup",event=>{
    if(event.keyCode===72){
        inLove=false;
        if(!inLove){
            console.log("???");
            facialExpressionOpenEyes();

            
           }
    }
   
});


