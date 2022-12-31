<section id="installation">

# Installation

Import in your CSS:

```css
@import 'https://unpkg.com/nokss/dist/nokss.css';
```

Or link in your HTML:

```html
<link rel="stylesheet"
    href="https://unpkg.com/nokss/dist/nokss.css" />
```

You can use other CDNs as well:

<menu role="tablist" align="right">
  <button data-cdn="unpkg" aria-selected="true">UNPKG</button>
  <button data-cdn="jsdelivr">jsDelivr</button>
  <button data-cdn="esm">esm.sh</button>
</menu>

You can also self-host the stylesheet by downloading it. If you have a bundler that handles CSS imports, install
the library from NPM and then load the locally installed version:

```bash
npm install nokss
```
```css
@import 'node_modules/nokss/dist/nokss.css';
```

<script type="module" defer>
  import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/highlight.min.js';

  const parent = document.querySelector('#installation')
  const [css, html] = Array.from(parent.querySelectorAll('code'))

  const cdns = {
    unpkg: 'https://unpkg.com/nokss/dist/nokss.css',
    jsdelivr: 'https://cdn.jsdelivr.net/npm/nokss/dist/nokss.css',
    esm: 'https://esm.sh/nokss/dist/nokss.css',
  }

  const menu = parent.querySelectorAll('[role="tablist"] button').forEach(btn => {
    btn.addEventListener('click', () => {
      css.innerHTML = hljs.highlight(`@import '${cdns[btn.dataset.cdn]}';`, {language: 'css'}).value
      html.innerHTML = hljs.highlight(`<link rel="stylesheet"\n\thref="${cdns[btn.dataset.cdn]}" />`, {language: 'html'}).value
    })
  })
</script>

</section>