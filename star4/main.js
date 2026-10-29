$(document).ready(function () {
  $(".cell").each(function () {
    for (let i = 0; i < 4; i++) {
      $(this).append(
        i % 2 === 0
          ? '<span class="star">✦</span>'
          : '<span class="star">✧</span>'
      );
    }
  });
});