// up
document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = document.querySelectorAll(".up_animatedElement");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= -300 &&
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
