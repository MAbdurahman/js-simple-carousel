/*-----Javascript for Project Name */
$(document).ready(function () {
  //**************** variables ****************//
  const slider = document.getElementById('slider');
  const arrow_left = document.getElementById('arrow--left');
  const arrow_right = document.getElementById('arrow--right');
  const indicators_list = document.getElementById('indicators-list');
  
  let indicators = document.querySelectorAll('.indicator');
  let carousel_index = 0;
  
  updateControls();
  
  /**
   * @description - updates the controls to the carousel position; when at first
   * carousel the prev control will not be displayed, and when at the last carousel
   * position the next control will not be displayed.
   */
  function updateControls() {
    if (carousel_index <= 0) {
      document.getElementById('arrow--left').style.display = 'none';
      document.getElementById('arrow--right').style.display = 'block';
    } else if (carousel_index >= 3) {
      document.getElementById('arrow--right').style.display = 'none';
      document.getElementById('arrow--left').style.display = 'block';
    } else {
      document.getElementById('arrow--right').style.display = 'block';
      document.getElementById('arrow--left').style.display = 'block';
    }
  }
  
  /**
   * @description - adds an EventListener with an anonymous function that updates the
   * indicator with the selected class and removes the selected class from the appropriate
   * indicator. Also, add the transform style to slide the slider.
   * @param {element}
   * @param {number}
   */
  indicators.forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
      carousel_index = index;
      document
        .querySelector('.indicator.selected')
        .classList.remove('selected');
      indicator.classList.add('selected');
      slider.style.transform = 'translate(' + carousel_index * -25 + '%)';
      
      updateControls();
    });
  });
  
  /**
   * @description - adds an EventListener with an anonymous function that updates the
   * indicator with the selected class and removes the selected class from the appropriate
   * indicator. Also, add the transform style to slide the slider.
   */
  arrow_left.addEventListener('click', function () {
    carousel_index = carousel_index > 0 ? carousel_index - 1 : 0;
    document
      .querySelector('.indicator.selected')
      .classList.remove('selected');
    indicators_list.children[carousel_index].classList.add('selected');
    slider.style.transform = 'translate(' + carousel_index * -25 + '%)';
    
    updateControls();
  });
  
  /**
   * @description - adds an EventListener with an anonymous function that updates the
   * indicator with the selected class and removes the selected class from the appropriate
   * indicator. Also, add the transform style to slide the slider.
   */
  arrow_right.addEventListener('click', function () {
    carousel_index = carousel_index < 3 ? carousel_index + 1 : 3;
    document
      .querySelector('.indicator.selected')
      .classList.remove('selected');
    indicators_list.children[carousel_index].classList.add('selected');
    slider.style.transform = 'translate(' + carousel_index * -25 + '%)';
    
    updateControls();
  });
});
