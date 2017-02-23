(function () {
  'use strict';
})();

$(document).ready( () => {
  const $circWrapper= $('.circleWrapper');
  const $circContainer = $('.circleContainer');
  let createdCircle;

  function hexRandomColor() {
    // Convert random number to string value,
      // using slice() to start at index 2 
        // and ending on, but not including, index 8
    return '#' + Math.random().toString(16).slice(2,8);
  }

  // Parentheses not required, but easier to visualize . . . at least for me :p
  const calculatedCircles = ($circWrapper.innerWidth() / 50) * ($circWrapper.innerHeight() / 50);

  // Use recursion to create divs
  function divCreator(numOfDivs) {
    // Check if 0 . . .
    if (numOfDivs === 0) { 
      $circContainer.on('mouseover', (e) => {
        if (e.target.nodeName === 'DIV') {
          $(e.target).css('background-color', hexRandomColor());
        }
      });
      // . . . return; otherwise, you're gonna have a bad time
      return;
    }

    $circContainer.append($('<div></div>').addClass('circle'));
    return divCreator(numOfDivs - 1);
  }

  divCreator(calculatedCircles);

  setInterval( () => {
    $('h1').css('color', hexRandomColor());
  }, 2500);

  const $circRadius = $('.circle');

  $('h1').on('click', () => {
    $circRadius.toggleClass('circleRadius');
  });

}); // .ready function
