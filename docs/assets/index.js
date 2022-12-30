import select from 'https://esm.sh/select'
import { html, ref } from 'https://esm.sh/rehtm'


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


addCopyButtons()
