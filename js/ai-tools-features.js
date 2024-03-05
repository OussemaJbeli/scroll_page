let buttons = document.querySelectorAll(".nav_font");
// Add a click event listener to each chekbox
buttons.forEach(nav => {
    nav.addEventListener("click", () => {
        /**********button******** */
        let open_but = nav.getAttribute("id");
        butt(open_but);
        /**********panel******** */
        let open_pan = open_but+"_panel";
        animate(open_pan);
    });
});
/*******animation butt */
function butt(butt){
    let tab=['Text','Image','Code','Chat','Speech'];
    for(let i=0;i<=4;i++){
        if(tab[i]==butt){
            let icon = document.getElementById(butt);
            icon.style.color="var(--key_color)";
            icon.style.borderColor="var(--key_color)";
        }
        else{
            let icon = document.getElementById(tab[i]);
            icon.style.color="var(--dont_active)";
            icon.style.borderColor="var(--dont_active)";
        }
    }
}
/*******animation frame */
function animate(new_panel){
    let tab=['Text_panel','Image_panel','Code_panel','Chat_panel','Speech_panel'];
    for(let i=0;i<=4;i++){
        if(tab[i]==new_panel){
            let panel = document.getElementById(new_panel);
            panel.style.display="flex";
        }
        else{
            let panel = document.getElementById(tab[i]);
            panel.style.display="none";
        }
    }
    
}