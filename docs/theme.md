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
  filter: brightness(calc(1/var(--interactable-brightness)));
}

.color-mark.bg {
  border-radius: 3px;
}

.corner-mark {
  content: ' ';
  border: 1px solid var(--text-color);
  width: 1em;
  height: 1em;
}

.corner-mark.sharp {
  border-radius: 1px;
}

.corner-mark.round {
  border-radius: 5px;
}

.corner-mark.circle {
  border-radius: 16px;
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

<menu role="toolbar">
  <menu role="radiogroup" data-key="--roundness">
    <button value="1px" aria-label="sharp corners">
      <span class="corner-mark sharp"></span>
    </button>
    <button value="5px" aria-label="round corners">
      <span class="corner-mark round"></span>
    </button>
    <button value="16px" aria-label="circular corners">
      <span class="corner-mark circle"></span>
    </button>
  </menu>
  <hr/>
  <menu role="radiogroup" data-key="--primary-color;--primary-text-color;light:--primary-color;light:--primary-text-color;dark:--primary-color;dark:--primary-text-color">
    <button value="var(--text-color);var(--background-color)" aria-label="monochrome">
      <span class="color-mark" style="background: var(--text-color)"></span>
    </button>
    <button value="#1F6FEB;#fff" aria-label="github blue"><span class="color-mark" style="background: #1F6FEB"></span></button>
    <button value="#1DB954;#000" aria-label="spotify green"><span class="color-mark" style="background: #1DB954"></span></button>
    <button value="#FF9900;#000" aria-label="amazon orange"><span class="color-mark" style="background: #FF9900"></span></button>
    <button value="#FF5A5F;#fff" aria-label="airbnb red"><span class="color-mark" style="background: #FF5A5F"></span></button>
    <button value=";;#833AB4;#fff;#E1306C;#fff" aria-label="lyft pink">
      <span class="color-mark light" style="background: #833AB4"></span>
      <span class="color-mark dark" style="background: #E1306C"></span>
    </button>
  </menu>
  <hr/>
  <menu role="radiogroup" data-key="light:--background-color;light:--text-color;dark:--background-color;dark:--text-color;light:--interactable-brightness;light:--border-expression;dark:--interactable-brightness;dark:--border-expression">
    <button value="#FFFDF9;#393E46;#0D1118;#FFFCF3" aria-label="midnight">
      <span class="color-mark light bg" style="background: #FFFDF9"></span>
      <span class="color-mark dark bg" style="background: #0D1118"></span>
    </button>
    <button value="#F3EFE0;#222222;#222222;#F3EFE0;;;1.25;.05" aria-label="printish">
      <span class="color-mark light bg" style="background: #F3EFE0"></span>
      <span class="color-mark dark bg" style="background: #222222"></span>
    </button>
    <button value="#f5f5f5;#000;#111;#fff;0.97;0;1.35;0" aria-label="classic">
      <span class="color-mark light bg" style="background: #f5f5f5"></span>
      <span class="color-mark dark bg" style="background: #111"></span>
    </button>
    <button value="#000;var(--primary-color, white);#000;var(--primary-color, white);1;1;1;1" aria-label="terminal">
      <span class="color-mark light bg" style="background: #000"></span>
      <span class="color-mark dark bg" style="background: #000"></span>
    </button>
  </menu>
</menu>

<br>

<div role="presentation">
<h3>Lorem ipsum</h3>

dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<menu role="group" align="right">
  <button>Finibus</button>
  <button>Bonorum</button>
</menu>

</div>

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
</script>

</section>