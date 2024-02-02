/****************side_list***************** */
var button_open = document.getElementById("button_open");
var button_close = document.getElementById("button_close_icon");
var menu = document.getElementById("list");
var back_black = document.getElementById("back_black");
/**********open****** */
button_open.onclick = function() {
    menu.style.left = "-6.25vw";
    back_black.style.left = "0px";
    button_close.style.animation='active_rotate_animation 0.7s forwards ease';

};
button_close.onclick = function() {
    menu.style.left = "-100%";
    back_black.style.left = "-100vw";
    button_close.style.animation='desactive_rotate_animation 0.7s forwards ease';
};
/***********close******* */
back_black.addEventListener('click',list_but);
var side_button = document.getElementById("side_button1");
side_button.addEventListener('click',list_but);
var side_button1 = document.getElementById("side_button2");
side_button1.addEventListener('click',list_but);
var side_button = document.getElementById("side_button3");
side_button.addEventListener('click',list_but);
var side_button1 = document.getElementById("side_button4");
side_button1.addEventListener('click',list_but);
var side_button1 = document.getElementById("side_button5");
side_button1.addEventListener('click',list_but);
var side_button1 = document.getElementById("side_button6");
side_button1.addEventListener('click',list_but);
function list_but() {
    menu.style.left = "-600px";
    back_black.style.left = "-100vw";
};