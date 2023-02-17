//                                      Butterfly media query



let mqls = [
    window.matchMedia('screen and (min-width: 576px) and (max-width: 767px'), /* md */
    window.matchMedia('screen and (min-width: 768px) and (max-width: 991px'), /* lg */
    window.matchMedia('screen and (min-width: 992px) and (max-width: 1199px)'), /* xl */
    window.matchMedia('screen and (min-width: 1200px) and (max-width: 1399px)') /* xxl */
];

for(let i=0; i < mqls.length; i++){
    mqls[i].addEventListener("change",()=>{

        if( mqls[3].matches ){

            /******************** xxl ********************/

            // make break for blinking text

            const blinkng_text = document.getElementById("blinkng_text")
            blinkng_text.style.display = "flex";



            console.log('xxl'); 

            /******************** xxl ********************/


        }


        else if( mqls[2].matches ){
            /******************** xl ********************/

            // make break for blinking text

            const blinkng_text = document.getElementById("blinkng_text")
            blinkng_text.style.display = "flex";

            let posX = 0;
            let posY = 0;
            let t = 0.1;
            let item = document.getElementById("butterfly");


            function anime(){
            t ++;

                posX = 480 + (Math.sin(t / 100 *3* Math.PI * 1/10) * 380);
                posY = Math.sin(t / 5 * Math.PI / 1/3.9) * 30;

                item.style.left = posX +"px";
                item.style.bottom = posY + "px";

                requestAnimationFrame(anime);
            }

            anime();
    
            console.log('xl');   

            /******************** xl ********************/
        }
    
        else if( mqls[1].matches ){

            /******************** lg ********************/

            // make break for blinking text

            const blinkng_text = document.getElementById("blinkng_text")
            blinkng_text.style.display = "flex";

            let posX = 0;
            let posY = 0;
            let t = 0.1;
            let item = document.getElementById("butterfly");


            function anime(){
            t ++;

                posX = 360 + (Math.sin(t / 100 *3* Math.PI * 1/10) * 290);
                posY = Math.sin(t / 5 * Math.PI / 1/3.9) * 30;

                item.style.left = posX +"px";
                item.style.bottom = posY + "px";

                requestAnimationFrame(anime);
            }

            anime();

            console.log('lg'); 

            /******************** lg ********************/
        }
        else if( mqls[0].matches ){

            /******************** md ********************/


            // make break for blinking text

            const blinkng_text = document.getElementById("blinkng_text")
            blinkng_text.style.display = "flex";

            let posX = 0;
            let posY = 0;
            let t = 0.1;
            let item = document.getElementById("butterfly");


            function anime(){
            t ++;

                posX = 260 + (Math.sin(t / 100 *3* Math.PI * 1/10) * 190);
                posY = Math.sin(t / 5 * Math.PI / 1/3.9) * 30;

                item.style.left = posX +"px";
                item.style.bottom = posY + "px";

                requestAnimationFrame(anime);
            }

            anime();

            console.log('md');  

            /******************** md ********************/
        }
        else if( (!mqls[3].matches && !mqls[2].matches) && (!mqls[1].matches && !mqls[0].matches)){

            /******************** sm ********************/


            // make break for blinking text

            const blinkng_text = document.getElementById("blinkng_text")
            blinkng_text.style.display = "block";

            let posX = 0;
            let posY = 0;
            let t = 0.1;
            let item = document.getElementById("butterfly");


            function anime(){
            t ++;

                posX = 150 + (Math.sin(t / 100 *3* Math.PI * 1/10) * 110);
                posY = Math.sin(t / 5 * Math.PI / 1/3.9) * 30;

                item.style.left = posX +"px";
                item.style.bottom = posY + "px";

                requestAnimationFrame(anime);
            }

            anime();
    
            console.log('sm');  

            /******************** sm ********************/
        }
    });
}








//                                      Butterfly media query