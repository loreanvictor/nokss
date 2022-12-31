<section id="theming">

# Theming

**nokss** exposes CSS variables for customizing the look and feel of the stylesheet. You can use these variables to create your own themes. You can change the main theme values in the code below and see their effects on the page:

```css
:root {
  --primary-color: #1F6FEB;
  --primary-text-color: #fff;
  --roundness: 5px;
  --spacing: 8px;
}

@media (prefers-color-scheme: light) {
  :root {
    --background-color: #FFFDF9;
    --text-color: #393E46;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #0D1118;
    --text-color: #FFFCF3;
  }
}
```

<style>
.color-mark {
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 1px solid rgba(128, 128, 128, .25);
  filter: brightness(calc(1/var(--button-secondary-brightness)));
}

:is(:active, [aria-selected="true"])>.color-mark {
  filter: brightness(1);
}

@media (prefers-color-scheme: light) {
  .color-mark.dark {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {
  .color-mark.light {
    display: none;
  }
}
</style>

<menu role="toolbar" align="right">
  <menu role="radiogroup" data-key="--roundness">
    <button class="material-symbols-outlined" value="0px">square</button>
    <button class="material-icons" value="5px">rounded_corner</button>
    <button class="material-symbols-outlined" value="16px">circle</button>
  </menu>
  <hr/>
  <menu role="radiogroup" data-key="--primary-color,--primary-text-color">
    <button value="#1F6FEB,#fff"><span class="color-mark" style="background: #1F6FEB"></span></button>
    <button value="#3D8361,#fff"><span class="color-mark" style="background: #3D8361"></span></button>
    <button value="#E0144C,#ff"><span class="color-mark" style="background: #E0144C"></span></button>
    <button value="#FFB100,#000"><span class="color-mark" style="background: #FFB100"></span></button>
  </menu>
  <hr/>
  <menu role="radiogroup" data-key="light:--background-color,light:--text-color,dark:--background-color,dark:--text-color">
    <button value="#FFFDF9,#393E46,#0D1118,#FFFCF3">
      <span class="color-mark light" style="background: #FFFDF9"></span>
      <span class="color-mark dark" style="background: #0D1118"></span>
    </button>
    <button value="#fff,#000,#111,#fff">
      <span class="color-mark light" style="background: #fff"></span>
      <span class="color-mark dark" style="background: #000"></span>
    </button>
    <button value="#F3EFE0,#222222,#222222,#F3EFE0">
      <span class="color-mark light" style="background: #E5E5CB"></span>
      <span class="color-mark dark" style="background: #F3EFE0"></span>
    </button>
  </menu>
</menu>

<style id="target">
</style>

<script type="module" defer>
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
      for (const prop of rule.style) {
        target[prop] = rule.styleMap.get(prop)[0].trim()
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

    code.innerHTML = hljs.highlight('css', style.textContent).value
  }

  adopt()

  code.setAttribute('contenteditable', true)
  code.addEventListener('input', adopt)

  const menu = parent.querySelector('pre>menu')
  const backup = code.textContent
  menu.setAttribute('aria-orientation', 'vertical')
  menu.appendChild(html`<button class=material-icons onclick=${() => {
    code.innerHTML = hljs.highlight('css', backup).value
    style.innerHTML = backup
    parent.querySelectorAll('[role="radiogroup"] button[aria-selected="true"]').forEach(btn => btn.setAttribute('aria-selected', false))
    adopt()
  }}>restore</button>`)

  parent.querySelectorAll('[role="radiogroup"]').forEach(group => {
    const keys = group.dataset.key.split(',')
    const key = group.dataset.key
    group.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      const values = btn.value.split(',')
      keys.forEach((key, index) => {
        const split = key.split(':')
        const prop = split.length > 1 ? split[1] : split[0]
        const target = split.length > 1 ? constructed[split[0]] : constructed.all

        target[prop] = values[index]
      })

      apply()
    }))
  })
</script>

</section>