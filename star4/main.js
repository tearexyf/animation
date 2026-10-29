$(document).ready(function () {
  $(".cell").each(function () {
    const cell = $(this);
    const speed = 40;
    const height = cell.innerHeight();
    const duration = height / speed;
    const positions = ["70%", "10%", "40%", "90%", "20%"];
    const delay = window.matchMedia("(max-width: 768px)").matches ? 0.2 : 0.5;
    for (let i = 0; i < 5; i++) {
      const star = $(
        i % 2 === 0
          ? '<span class="star">✦</span>'
          : '<span class="star">✧</span>'
      );

      star.css({
        "--start-left":  positions[i],
        "animation-duration": duration + "s",
        "animation-delay": i * delay + "s"
      });

      cell.append(star);
    }
  });
});