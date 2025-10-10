// choose best event for the device
const clickEvent = ('onpointerdown' in window) ? 'pointerdown' : 'click';

document.querySelectorAll('.box').forEach(box => {
  const content = box.querySelector('.content');
  const imgs = box.querySelector('.imgs');
  const regBtn = box.querySelector('.reg');
  const touchshow = box.querySelector('.touchshow');
  const regLink = box.querySelector('.reg_link');

  // track open/closed for this box
  let isOpen = false;

  function setOpen(state) {
    isOpen = !!state;
    content && content.classList.toggle('is-open', isOpen);
    imgs && imgs.classList.toggle('is-blurred', isOpen);
    regBtn && regBtn.classList.toggle('is-visible', isOpen);
    touchshow && touchshow.classList.toggle('is-rotated', isOpen);
  }

  // Toggle when clicking/touching the box (but ignore clicks on the register link)
  box.addEventListener(clickEvent, (e) => {
    // if clicked the register link, do nothing (let the link work)
    if (e.target.closest('.reg_link')) return;

    // if clicked the arrow itself, let its handler run (avoid double)
    if (e.target.closest('.touchshow')) return;

    setOpen(!isOpen);
    e.preventDefault();
  });

  // Toggle when clicking the arrow: stop propagation so box handler doesn't double-fire
  if (touchshow) {
    touchshow.addEventListener(clickEvent, (e) => {
      e.stopPropagation();
      setOpen(!isOpen);
      e.preventDefault();
    });
  }

  // Prevent empty href from navigating (optional: remove if you have real hrefs)
  if (regLink) {
    regLink.addEventListener('click', (e) => {
      // remove this preventDefault when you set a real registration URL
      e.preventDefault();
      // Example: open your registration modal here
    });
  }
});

