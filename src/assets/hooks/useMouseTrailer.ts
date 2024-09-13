export default function initTrailer(trailer: HTMLElement | null) {
  // @ts-ignore
  trailer.style.display = "flex";

  const animateTrailer = (e: any) => {
    if (trailer) {
      const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

      const keyframesTrailer = {
        transform: `translate(${x}px, ${y}px)`,
        width: "10px",
        height: "10px",
      };

      trailer.animate(keyframesTrailer, {
        duration: 800,
        fill: "forwards",
      });

      trailer.classList.remove("active");
    }
  };

  window.onmousemove = (e) => {
    // @ts-ignore
    if (e.target.closest(".interactive-surround")) {
      // @ts-ignore
      let target = e.target.closest(".interactive-surround");
      let targetWidth = target.offsetWidth;
      let targetHeight = target.offsetHeight;
      let targetRect = target.getBoundingClientRect();
      let targetX = targetRect.left + targetWidth / 2 - 7;
      let targetY = targetRect.top + targetHeight + 7;
      console.log(targetWidth, targetHeight, targetX, targetY);

      const keyframesTrailer = {
        transform: `translate(${targetX}px, ${targetY}px)`,
        width: "14px",
        height: "14px",
      };

      trailer?.animate(keyframesTrailer, {
        duration: 800,
        fill: "forwards",
      });

      trailer?.classList.add("active");
    } else {
      animateTrailer(e);
    }
  };
}
