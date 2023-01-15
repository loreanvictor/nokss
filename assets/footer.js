const control = document.querySelector('footer button[role="switch"]')
const sidebar = document.querySelector('body>aside:first-child')

control.addEventListener('click', () => {
  sidebar.setAttribute('aria-hidden',control.getAttribute('aria-checked'))
})

if (window.matchMedia('(max-width: 1024px)').matches) {
  control.setAttribute('aria-checked', 'true')

  sidebar.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', () => {
      control.setAttribute('aria-checked', 'true')
      sidebar.setAttribute('aria-hidden', 'true')
    })
  })

  document.addEventListener('click', event => {
    if (sidebar.getAttribute('aria-hidden') === 'false'
      && !sidebar.contains(event.target)
      && !control.contains(event.target)) {
      control.setAttribute('aria-checked', 'true')
      sidebar.setAttribute('aria-hidden', 'true')
    }
  })
}
