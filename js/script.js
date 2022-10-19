const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params){
    for (let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItems.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 1;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint)){
        animItems.classList.add('_active');
      } else {
        animItems.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  
  }
  animOnScroll();
}

