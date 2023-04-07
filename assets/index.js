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
      btn.current.textContent = '✔'
      setTimeout(() => btn.current.textContent = '📑', 2000)
    }

    pre.append(html`
      <menu role=toolbar align=right>
        <button ref=${btn} class=icon onclick=${copy} aria-label=copy>📑</button>
      </menu>
    `)
  })
}


const addHeaderLinks = () => {
  document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(h => {
    const id = h.id
    const btn = ref()

    const copyLink = () => {
      copy(location.protocol + '//' + location.host + location.pathname + '#' + id)
      btn.current.textContent = '✔'
      setTimeout(() => btn.current.textContent = '🔗', 2000)
    }

    h.append(html`
      <menu role=toolbar>
        <button ref=${btn} onclick=${copyLink} aria-label="copy link" class=icon>
          🔗
        </button>
      </menu>
    `)
  })
}


const addTablistBehavior = () => {
  document.querySelectorAll(
    ':is([role="tablist"], [role="radiogroup"])>:is(button, [role="tab"], [role="radio")]'
  ).forEach(button => {
    const prop = button.getAttribute('role') === 'radio' ? 'aria-checked' : 'aria-selected'
    button.addEventListener('click', () => {
      button.parentNode.querySelectorAll(':is(button, [role="tab"], [role="radio"]')
        .forEach(btn => btn.setAttribute(prop, false))
      button.setAttribute(prop, true)
    })
  })
}


const addRadioGroupBehavior = () => {
  document.querySelectorAll('[role="radiogroup"]').forEach(group => {
    group.querySelectorAll('button, [role="radio"]').forEach(radio => {
      radio.addEventListener('click', () => {
        group.querySelectorAll('button, [role="radio"]').forEach(r => r.setAttribute('aria-checked', false))
        radio.setAttribute('aria-checked', true)
      })
    })
  })
}


const addTreeBehavior = () => {
  document.querySelectorAll('[role="treeitem"][aria-expanded]').forEach(item => {
    item.addEventListener('click', event => {
      const expanded = (event.target === item && item.getAttribute('aria-expanded') === 'true') ? false : true
      if (expanded) {
        item.parentElement.querySelectorAll('[role="treeitem"][aria-expanded="true"]').forEach(
          i => i.setAttribute('aria-expanded', false)
        )
      }
      item.setAttribute('aria-expanded', expanded)
      event.stopPropagation()
    })
  })

  document.querySelectorAll('[role="tree"]').forEach(tree => {
    tree.querySelectorAll('[role="treeitem"]>a:first-child').forEach(item => {
      item.addEventListener('click', () => {  
        tree.querySelectorAll('[role="treeitem"][aria-selected="true"]').forEach(i => {
          i.setAttribute('aria-selected', false)
        })
        item.parentElement.setAttribute('aria-selected', true)
      })
    })
  })
}


const addSwitchBehavior = () => {
  document.querySelectorAll('[role="switch"]').forEach(sw => {
    sw.addEventListener('click', () => {
      sw.setAttribute('aria-checked', sw.getAttribute('aria-checked') === 'true' ? 'false' : 'true')
    })
  })
}


const highlightSidebarOnScroll = () => {
  const sidebar = document.querySelector('body > aside:first-of-type')
  const update = (initial) => {
    let target = sidebar.querySelector('a[href]').parentElement
    let hash = ''
    document.querySelectorAll(':is(h1, h2, h3, h4, h5, h6)[id]').forEach(h => {
      const { top } = h.getBoundingClientRect()
      if (top <= window.innerHeight / 2) {
        hash = h.id
        const candidate = sidebar.querySelector(`a[href="#${h.id}"]`)
        candidate && (target = candidate.parentElement)
      }
    })

    if (target) {
      sidebar.querySelectorAll('[aria-selected="true"]').forEach(el => el.setAttribute('aria-selected', false))
      target.setAttribute('aria-selected', true)
      let parent = target.parentElement
      sidebar.querySelectorAll('[aria-expanded="true"]').forEach(
        el => el !== target && el.setAttribute('aria-expanded', false)
      )
      while (parent && parent !== sidebar) {
        if (parent.getAttribute('role') == 'treeitem') {
          parent.setAttribute('aria-expanded', true)
        }
        parent = parent.parentElement
      }

      if (!initial && window.location.hash !== '#' + hash) {
        history.replaceState(null, null, '#' + hash)
      }
    }
  }

  document.addEventListener('scroll', () => update(false))
  update(true)
}


addCopyButtons()
addHeaderLinks()
addTablistBehavior()
addRadioGroupBehavior()
addTreeBehavior()
addSwitchBehavior()
highlightSidebarOnScroll()