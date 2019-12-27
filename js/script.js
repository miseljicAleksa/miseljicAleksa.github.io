let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});




// slideshow ouiiii

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}




// galeria


$( ".img-wrapper" ).hover(
    function() {
      $(this).find(".img-overlay").animate({opacity: 1}, 600);
    }, function() {
      $(this).find(".img-overlay").animate({opacity: 0}, 600);
    }
  );
  
  
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
  var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
  
  
  $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
  $("#gallery").append($overlay);
  
  
  $overlay.hide();
  
  
  $(".img-overlay").click(function(event) {
    
    event.preventDefault();
  
    var imageLocation = $(this).prev().attr("href");
    
    $image.attr("src", imageLocation);
    
    $overlay.fadeIn("slow");
  });
  
  
  $overlay.click(function() {
    
    $(this).fadeOut("slow");
  });
  
  
  $nextButton.click(function(event) {
    
    $("#overlay img").hide();
    
    var $currentImgSrc = $("#overlay img").attr("src");
    
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    
    var $images = $("#image-gallery img");
    
    if ($nextImg.length > 0) { 
      
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
      
      $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    
    event.stopPropagation();
  });
  
  
  $prevButton.click(function(event) {
    
    $("#overlay img").hide();
    
    var $currentImgSrc = $("#overlay img").attr("src");
    
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    
    event.stopPropagation();
  });
  
  
  $exitButton.click(function() {
    
    $("#overlay").fadeOut("slow");
  });