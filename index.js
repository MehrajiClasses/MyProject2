//showing alert if someone clicked the image
var myImage = document.querySelector(".my-image img");
myImage.addEventListener("click",function(){
   alert("This is Vijay Mehra Founder of Mehraji Classes.");
});

//adding animation to all buttons
var numberOfButton = document.querySelectorAll(".button");
for(var i = 0; i<numberOfButton.length; i++){
    numberOfButton[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);
    });
}

//creating Animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    console.log(currentKey);

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}




