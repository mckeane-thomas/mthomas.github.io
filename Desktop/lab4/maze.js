/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var touchWall = false;
window.onload = function(){
    $("start").onclick = mouseStart;
    $("end").onmouseover = mouseEnd;
    $("boundary1").onmouseover= outOfBounds;
    var allBoundary = $$("div#maze div.boundary");
    for(var i = 0; i< allBoundary.length;i++){
            allBoundary[i].onmouseover = outOfBounds;
    }
};

//tracks the movement of the mouse and checks whethet a wall or boundary was touched. 
//The  allBoundary var stores an array of boundary, and add the css style of the class "youlose" if a boundary was touched
function outOfBounds(){
    touchWall = true;
    var allBoundary = $$("div#maze div.boundary");
    for( var i = 0; i < allBoundary.length; i++){
        allBoundary[i].addClassName("youlose");
    }}
    //function to track the mouse movement from the start. touch wall initialized to false ensure
    //get the boundaries and store in as an array in variable get bounds
    //remove the class "youlose" css style 
 function mouseStart(){
     touchWall = false;
     var getBoundary = $$("div#maze div.boundary");
     for(var i = 0; i< getBoundary.length; i++){
         getBoundary[i].removeClassName("youlose");
     }
 }
 function mouseEnd()
 {
     //if wall was touched display this message
     if(touchWall){
         alert("You Lost");
     }
     //if wall was not touched displa a you win message
     else{
         alert("You Win");
     }
 }

