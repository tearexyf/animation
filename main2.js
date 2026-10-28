$(document).ready(function () {
  $(".cell").each(function () {
    for (let i = 0; i < 4; i++) {
      $(this).append('<span class="star">✦</span>');
  }});
});