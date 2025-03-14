(function () {
  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal()

  // Force dark mode
  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')
  rootEl.classList.add('lights-off')

  // Add lights-off class to body immediately
  body.classList.add('lights-off')
  
  // Remove any lights-on classes if they exist
  body.classList.remove('lights-on')
  rootEl.classList.remove('lights-on')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
    
    // Force dark mode again after load to override any default behavior
    document.documentElement.classList.add('lights-off')
    document.body.classList.add('lights-off')
    
    // Hide all light assets
    document.querySelectorAll('.asset-light').forEach(el => {
      el.style.display = 'none';
    });
    
    // Show all dark assets
    document.querySelectorAll('.asset-dark').forEach(el => {
      el.style.display = 'block';
    });
  })

  // Reveal animations
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

  // Light switcher code removed - site now always in dark mode
}())