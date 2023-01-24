if (window.innerWidth > 1024) {
  let initial = true
  const listener = () => {
    if (scrollY > window.innerHeight * 0.85) {
      if (initial) {
        initial = false
        document.querySelector('body>aside:first-of-type').setAttribute('aria-hidden', false)
        document.querySelector('body>footer [role="switch"]').setAttribute('aria-checked', false)
        document.removeEventListener('scroll', listener)
      }
    }
  }

  document.addEventListener('scroll', listener)
}
