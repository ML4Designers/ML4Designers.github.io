// JavaScript Document
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });
});



window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});


