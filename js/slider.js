let currentIndex = 0; 
let autoslider = true;
let slideritem1 = document.getElementById('slider-item1');
let slideritem2 = document.getElementById('slider-item2');
let slideritem3 = document.getElementById('slider-item3');
let slideritem4 = document.getElementById('slider-item4');
let slideritem5 = document.getElementById('slider-item5');

    function showSlides(index) {
      const sliderWrapper = document.getElementById('sliderWrapper');
      const totalSlides = document.querySelectorAll('.slider-item').length;
      const newTransformValue = -currentIndex * 100 + '%';
      sliderWrapper.style.transform = 'translateX(' + newTransformValue + ')';
      switch (index) {
        case 0:
            slideritem1.classList.add("hovered_slider");
            slideritem2.classList.remove("hovered_slider");
            slideritem3.classList.remove("hovered_slider");
            slideritem4.classList.remove("hovered_slider");
            slideritem5.classList.remove("hovered_slider");
            break;
        case -1:
                slideritem2.classList.add("hovered_slider");
                slideritem1.classList.remove("hovered_slider");
                slideritem3.classList.remove("hovered_slider");
                slideritem4.classList.remove("hovered_slider");
                slideritem5.classList.remove("hovered_slider");
            break;
        case -2:
                    slideritem3.classList.add("hovered_slider");
                    slideritem2.classList.remove("hovered_slider");
                    slideritem1.classList.remove("hovered_slider");
                    slideritem4.classList.remove("hovered_slider");
                    slideritem5.classList.remove("hovered_slider");
            break;
        case -3:
                        slideritem4.classList.add("hovered_slider");
                        slideritem2.classList.remove("hovered_slider");
                        slideritem3.classList.remove("hovered_slider");
                        slideritem1.classList.remove("hovered_slider");
                        slideritem5.classList.remove("hovered_slider");
            break;
        case -4:
                            slideritem5.classList.add("hovered_slider");
                            slideritem2.classList.remove("hovered_slider");
                            slideritem3.classList.remove("hovered_slider");
                            slideritem4.classList.remove("hovered_slider");
                            slideritem1.classList.remove("hovered_slider");
        break;
      
        default:
            break;
      }
    }

    function nextSlide() {
        currentIndex = (currentIndex - 1) % 5;
        showSlides(currentIndex);
        autoslider=false;
        setTimeout(function () {
            autoslider=true;
        }, 4000);
    }

    function prevSlide() {
        currentIndex = (currentIndex + 1 - 5) % 5;
        showSlides(currentIndex);
        autoslider=false;
        setTimeout(function () {
            autoslider=true;
        }, 4000);
    }

    function autoSlide() {
        currentIndex = (currentIndex - 1) % 5;
        showSlides(currentIndex);
    }

    function pauseAutoSlide() {
        autoslider=false;
        slideritem1.classList.remove("hovered_slider");
        slideritem2.classList.remove("hovered_slider");
        slideritem3.classList.remove("hovered_slider");
        slideritem4.classList.remove("hovered_slider");
        slideritem5.classList.remove("hovered_slider");
    }

    function resumeAutoSlide() {
        autoslider=true;
    }

    showSlides(currentIndex);

    setInterval(checktime, 2000);

    function checktime() {
        if (autoslider) {
            autoSlide();
        } else {
            return 0;
        }
    }