import select from 'https://esm.sh/select'
import { html, ref } from 'https://esm.sh/rehtm'


const copy = text => {
  const el = ref()
  document.body.append(html`<textarea ref=${el} style="{opacity: 0; width: 0; height: 0}">${text}</textarea>`)
  select(el.current)
  document.execCommand('copy')
  el.current.remove()
}


const addCopyButtons = () => {
  document.querySelectorAll('pre').forEach(pre => {
    const btn = ref()

    const copy = () => {
      select(pre.querySelector('code'))
      document.execCommand('copy')
      btn.current.textContent = 'done'
      setTimeout(() => btn.current.textContent = 'content_copy', 2000)
    }

    pre.append(html`
      <menu role=toolbar align=right>
        <button ref=${btn} class=material-icons onclick=${copy}>content_copy</button>
      </menu>
    `)
  })
}


const addHeaderLinks = () => {
  document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
    const id = h.id
    const btn = ref()

    const copyLink = () => {
      copy(location.protocol + '//' + location.host + location.pathname + '#' + id)
      btn.current.textContent = 'done'
      setTimeout(() => btn.current.textContent = 'link', 2000)
    }

    h.append(html`<menu role=toolbar><button ref=${btn} onclick=${copyLink} class=material-icons>link</button></menu>`)
  })
}


const addTablistBehavior = () => {
  document.querySelectorAll('[role="tablist"] button').forEach(button => {
    button.addEventListener('click', () => {
      button.parentNode.querySelectorAll('button').forEach(btn => btn.setAttribute('aria-selected', false))
      button.setAttribute('aria-selected', true)
    })
  })
}


addCopyButtons()
addHeaderLinks()
addTablistBehavior()