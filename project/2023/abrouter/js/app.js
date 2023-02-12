uvstm_tabs(1);

document.querySelectorAll('[data-aos]').forEach(el => {
  (el.getAttribute('data-aos-offset')) ? null : el.setAttribute('data-aos-offset', el.offsetHeight);
  (el.getAttribute('data-aos-duration') ? null : el.setAttribute('data-aos-duration', 400));
})

AOS.init()