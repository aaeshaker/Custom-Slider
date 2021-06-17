      // Custom Slider

      const carouselSlide = document.querySelector('.carousel-slide');
      const carouselImages = document.querySelectorAll('.carousel-slide img');

      // Navigation Buttons
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      // Counter
      let counter = 1;
      const size = carouselImages[0].clientWidth;

      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

      // Button Listeners
      nextBtn.addEventListener('click', () => {
          if (counter >= carouselImages.length - 1) return;
          carouselSlide.style.transition = 'transform 0.4s ease-in-out';
          counter++;
          carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

      });

      prevBtn.addEventListener('click', () => {
          if (counter <= 0) return;
          carouselSlide.style.transition = 'transform 0.4s ease-in-out';
          counter--;
          carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

      });

      // Loop effect
      carouselSlide.addEventListener('transitionend', () => {
          if (carouselImages[counter].id === 'lastClone') {
              carouselSlide.style.transition = 'none';
              counter = carouselImages.length - 2;
              carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
          }
          if (carouselImages[counter].id === 'firstClone') {
              carouselSlide.style.transition = 'none';
              counter = carouselImages.length - counter;
              carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
          }
      })

      // carouselImages.forEach(image => {
      //   image.addEventListener('mousemove', () => {

      //   })
      // })

      // $(function () {

      //   var min = 0;
      //   var max = -((carouselImages.length - 1) * size);

      //   $(".carousel-slide").width(carouselImages.length * size).draggable({
      //     axis: 'x',
      //     drag: function (event, ui) {
      //       if (ui.position.left > min) ui.position.left = min;
      //       if (ui.position.left < max) ui.position.left = max;
      //     }
      //   });
      // });


      let drag = false;
      document.addEventListener(
          'mousedown', () => drag = false);

      document.addEventListener(
          'mousemove', () => drag = true);

      document.addEventListener(
          'mouseup', () => {
              console.log(drag ? 'drag' : 'click');
          }
      );