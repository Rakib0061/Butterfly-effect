//                                      Sticky navbar



let navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    let Y = window.scrollY;
    navbar.classList.toggle("sticky", Y > 0);
})



//                                      Sticky navbar








//                                      type next effects


let m = 0;
let xoss = " Rakib I am a designer & developer";
                
let typing = ()=>{
    if(m < xoss.length){
        document.getElementById("effect").innerHTML += xoss.charAt(m);
        m++;

        setTimeout(typing,150);
    }
}
                
typing();
                
                
//                                      type next effects







//                                  Butterfly effect


let posX = 0;
let posY = 0;
let t = 0.1;
let item = document.getElementById("butterfly");


function anime(){
    t ++;

    posX = 650 + (Math.sin(t / 100 *3* Math.PI * 1/10) * 500);
    posY = Math.sin(t / 5 * Math.PI / 1/3.9) * 30;

    item.style.left = posX +"px";
    item.style.bottom = posY + "px";

    requestAnimationFrame(anime);
}

anime();



//                                      Butterfly effect




//                                      Butterfly media effect





//                                      Butterfly media effect







//                                      declare variable

    const words = ["Advanchare","Chill","Freshess","Cool"];

    let wordCount = 0;
    let letterCount = 0;

    let currentWord = ""; 
    let currentletter = "";

    let tiemOut = 400;

    let isDeleting = false;


                // actual type effect

    function type(){
        if(wordCount === words.length) {
            wordCount = 0;
        }

        currentWord = words[wordCount]; 
        

        if(isDeleting){
            currentletter = currentWord.slice(0, --letterCount);
        }
        else{
            currentletter = currentWord.slice(0, ++letterCount);
        }



        document.querySelector(".typeWrite").innerHTML = currentletter;

        tiemOut = isDeleting ? 200 : 400;

        if( !isDeleting && currentletter.length === currentWord.length ){
             tiemOut = 2000;
             isDeleting = true;
        }
        else if( isDeleting && currentletter.length === 0 ){
            tiemOut = 1000;
            isDeleting = false;
            wordCount ++;
        }
        setTimeout(type,tiemOut);
    }   

    type ();













