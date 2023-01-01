import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/highlight.min.js'
import { html } from 'https://esm.sh/rehtm'

const parent = document.querySelector('#theming')
const code = parent.querySelector('code')
const style = parent.querySelector('style#target')

const constructed = { all: {}, light: {}, dark: {} }

const adopt = () => {
  style.innerHTML = code.textContent
  for (const wrap of style.sheet.cssRules) {
    const dark = wrap.conditionText === '(prefers-color-scheme: dark)'
    const light = wrap.conditionText === '(prefers-color-scheme: light)'
    const rule = (dark || light) ? wrap.cssRules[0] : wrap
    const target = dark ? constructed.dark : light ? constructed.light : constructed.all
    if (rule.styleMap) {
      for (const prop of rule.style) {
        target[prop] = rule.styleMap.get(prop)[0].trim()
      }
    } else if (rule.style.cssText) {
      rule.style.cssText.split(';').forEach(def => {
        const [prop, value] = def.split(':')
        if (prop && value) {
          target[prop.trim()] = value.trim()
        }
      })
    }
  }
}

const apply = () => {
  style.textContent = `:root {
${Object.entries(constructed.all).map(([prop, value]) => `  ${prop}: ${value};`).join('\n')}
}

@media (prefers-color-scheme: light) {
  :root {
${Object.entries(constructed.light).map(([prop, value]) => `    ${prop}: ${value};`).join('\n')}
  }
}

@media (prefers-color-scheme: dark) {
  :root {
${Object.entries(constructed.dark).map(([prop, value]) => `    ${prop}: ${value};`).join('\n')}
  }
}`

  code.innerHTML = hljs.highlight(style.textContent, { language: 'css' }).value
}

code.setAttribute('contenteditable', true)
code.addEventListener('input', adopt)

const menu = parent.querySelector('pre>menu')
const backup = code.textContent
menu.setAttribute('aria-orientation', 'vertical')
menu.appendChild(html`<button class=icon aria-label=reset onclick=${() => {
  code.innerHTML = hljs.highlight(backup, { language: 'css' }).value
  style.innerHTML = backup
  parent.querySelectorAll('[role="radiogroup"] button[aria-selected="true"]').forEach(btn => btn.setAttribute('aria-selected', false))
  adopt()
}}>⟲</button>`)

parent.querySelectorAll('[role="radiogroup"]').forEach(group => {
  group.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    const keys = (btn.dataset.key ?? group.dataset.key).split(';')
    const values = btn.value.split(';')
    keys.forEach((key, index) => {
      const split = key.split(':')
      const prop = split.length > 1 ? split[1] : split[0]
      const target = split.length > 1 ? constructed[split[0]] : constructed.all

      if (values[index]) {
        target[prop] = values[index]
      } else {
        delete target[prop]
      }
    })

    apply()
  }))
})

adopt()