(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  const sr = window.sr = ScrollReveal()

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')
  rootEl.classList.add('lights-off')

  body.classList.add('lights-off')
  
  body.classList.remove('lights-on')
  rootEl.classList.remove('lights-on')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
    
    document.documentElement.classList.add('lights-off')
    document.body.classList.add('lights-off')
    
    document.querySelectorAll('.asset-light').forEach(el => {
      el.style.display = 'none';
    });
    
    document.querySelectorAll('.asset-dark').forEach(el => {
      el.style.display = 'block';
    });
  })

  function revealAnimations () {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }

}())