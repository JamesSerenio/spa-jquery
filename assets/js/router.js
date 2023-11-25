$(document).ready(function () {
    const contentDiv = $('#content');

    // Initial content to display when the SPA loads
    contentDiv.load('views/home.html');

    // Handle navigation links
    $('nav a').on('click', function (event) {
        event.preventDefault();

        const target = $(this).attr('href').substr(1); // Remove the '#' symbol
        navigateTo(target);
    });

    // Function to load content based on the path
    function loadContent(path) {
        // Replace this with your own logic to load content dynamically
        contentDiv.load(`views/${path}.html`, function () {
            contentDiv.fadeIn(200);
        });
    }

    // Function to update the URL and content
    function navigateTo(path) {
        // Use pushState to update the URL without triggering a page reload
        history.pushState(null, null, `#${path}`);

        // Load content based on the path
        loadContent(path);
    }

    // Example: handle back/forward buttons
    $(window).on('popstate', function () {
        // Load content based on the current URL
        loadContent(location.hash.substr(1));
    });

    // Load initial content based on the current URL
    loadContent(location.hash.substr(1));
  
$('nav a').on('click', function(event) {
    $('nav a').removeClass('app-nav-btn-active');
    $(this).addClass('app-nav-btn-active');
});

    
  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');

      if($(window).scrollTop() > 0){
          $('.top').show();
      }else{
          $('.top').hide();
      }

  });

  $('a[href*="#"]').on('click',function(e){

      e.preventDefault();

      $('html, body').animate({

      },
      500,
      'linear'
      );

  });

  var typed = new Typed(".post", {
    strings: ["Front End Developer","Web Designer","Programer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}); 
}); 