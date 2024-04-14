window.onload = function() {
  let $ = {
    moreInfoButtons: document.querySelectorAll("button[data-projects='more-info-button']")
  }

  // Register events
  $.moreInfoButtons.forEach(moreInfoButton => {
    moreInfoButton.addEventListener("click", (e) => {
      // Rotate the arrow
      e.target.classList.toggle("rotate-180");
      // Expand the parent container
      let $info = e.target.parentElement.querySelector("div[data-projects='more-info'");
      $info.classList.toggle("max-h-0");
      $info.classList.toggle("max-h-64");
    });
  });
}