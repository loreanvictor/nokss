import select from 'https://esm.sh/select'
import { html } from 'https://esm.sh/rehtm'


const addCopyButtons = () => {
  document.querySelectorAll('pre').forEach(pre => {
    const copy = () => {
      select(pre.querySelector('code'))
      document.execCommand('copy')
    }

    pre.append(html`
      <menu role=toolbar align=right>
        <button class=material-icons onclick=${copy}>content_copy</button>
      </menu>
    `)
  })
}


addCopyButtons()
