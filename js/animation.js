// counter
  let number1 = document.getElementById('number1');
  let number2 = document.getElementById('number2');
  let number3 = document.getElementById('number3');
  let numbers_panel = document.getElementById('numbers_panel')
  
  max_num1=number1.innerText
  max_num2=number2.innerText
  max_num3=number3.innerText

  number1.innerText = 0;
  number2.innerText = 0;
  number3.innerText = 0;
  
  let i=0;
  let call = true;
  function counter(i,max,element){
    if(i<=max){
      setTimeout(function() {
        element.innerText = i;
        i++;
        counter(i,max,element);
      }, (10000/max)/2);
    }
  };
// up
document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".up_animatedElement");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      animatedElements.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("up_visible");
          element.classList.remove("up_hidden");
          // counter
          if(element == numbers_panel && call){
            counter(i,max_num1,number1);
            counter(i,max_num2,number2);
            counter(i,max_num3,number3);
            call = false
          }
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
  
    // Initial check in case the elements are already in the viewport on page load
    handleScroll();
  });

// right
document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".right_animatedElement");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      animatedElements.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("right_visible");
          element.classList.remove("right_hidden");
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
  
    // Initial check in case the elements are already in the viewport on page load
    handleScroll();
  });
  
// left
document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".left_animatedElement");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      animatedElements.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("left_visible");
          element.classList.remove("left_hidden");
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
  
    handleScroll();
  });

  // header scroll
  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });
