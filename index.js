$(document).ready(function(){
    $('.carousel').carousel();
  });

  function changeBg(bg, title) {
    const banner = document.querySelector(".banner");
    const contents = document.querySelector(".content");
    banner.style.background = `url(../images/movies/${bg})`
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    
    contents.forEach(content => {
      content.classList.remove("active");
      if (content.classList.contains(title)) {
      content.classList.add("active");
      }
    });
  }