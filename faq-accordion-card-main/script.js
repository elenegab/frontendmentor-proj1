const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");
const clickedText1 = document.getElementById("clickedText1");
const clickedText2 = document.getElementById("clickedText2");
const clickedText3 = document.getElementById("clickedText3");
const clickedText4 = document.getElementById("clickedText4");
const clickedText5 = document.getElementById("clickedText5");

line1.onclick = function(){
    if(clickedText1.style.display === "none"){
        clickedText1.style.display = "block"
    
    }else{
        clickedText1.style.display = "none"
    }
}
line2.onclick = function(){
    if(clickedText2.style.display === "none"){
        clickedText2.style.display = "block"
    
    }else{
        clickedText2.style.display = "none"
    }
}

line3.onclick = function(){
    if(clickedText3.style.display === "none"){
        clickedText3.style.display = "block"
    
    }else{
        clickedText3.style.display = "none"
    }
}

line4.onclick = function(){
    if(clickedText4.style.display === "none"){
        clickedText4.style.display = "block"
    
    }else{
        clickedText4.style.display = "none"
    }
}

line5.onclick = function(){
    if(clickedText5.style.display === "none"){
        clickedText5.style.display = "block"
    
    }else{
        clickedText5.style.display = "none"
    }
}

