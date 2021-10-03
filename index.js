$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.7,
      },
      600: {
        items: 3,
      },
    },
  })
})
