const btns = document.querySelectorAll(".option");

btns[0].className = "focus";

// focus on the current button
[...btns].forEach( btn => {
    btn.addEventListener("click", function(){

        if(btn.className == "option"){
            [...btns].forEach( btn1 => { if( btn1.className != "option" && btn1 != btn){
                btn1.className = "option";
            }
           })
            btn.className = "focus";
        }
    },false);
})
