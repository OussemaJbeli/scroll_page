const coords = { x: 0, y: 0 };
      const circles = document.querySelectorAll(".circlecursor");

      const colors = [
        "#0e63dc", 
        "#1b74db",
        "#2875db",
        "#3586db",
        "#42a0da",
        "#4fa1da",
        "#5fb2d9",
        "#6fc3d8",
        "#7fd4d7",
        "#8fe5d6",
        "#9ff6d5",
        "#aee7d4",
        "#bde8d3",
        "#ccf9d2",
        "#dbeada",
        "#e9ebd9",
        "#f2ebd5",
        "#f3f1d0",
        "#f3f3cc",
        "#f3f5c8",
        "#f3f7c4",
        "#f3f7fd" 
      ];       

      circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
      });

      window.addEventListener("mousemove", function(e){
        coords.x = e.clientX;
        coords.y = e.clientY;
        
      });

      function animateCircles() {
        
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach(function (circle, index) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          
          circle.style.scale = (circles.length - index) / circles.length;
          
          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        });
      
        requestAnimationFrame(animateCircles);
      }

      animateCircles();