<section id="installation">

# Installation

Import in your CSS:

```css
@import 'https://unpkg.com/nokss';
```

Or link in your HTML:

```html
<link rel="stylesheet"
    href="https://unpkg.com/nokss" />
```

You can use other CDNs as well:

<menu role="radiogroup" align="right">
  <button role="radio" data-cdn="unpkg" aria-checked="true">UNPKG</button>
  <button role="radio" data-cdn="jsdelivr">jsDelivr</button>
  <button role="radio" data-cdn="esm">esm.sh</button>
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
    unpkg: { host: 'https://unpkg.com/nokss', path: '' },
    jsdelivr: { host: 'https://cdn.jsdelivr.net/npm/nokss', path:'/dist/nokss.css' },
    esm: { host: 'https://esm.sh/nokss', path: '/dist/nokss.css' },
  }

  const menu = parent.querySelectorAll('[role="radiogroup"] button').forEach(btn => {
    btn.addEventListener('click', () => {
      const cdn = cdns[btn.dataset.cdn]
      const url = cdn.host + cdn.path
      css.innerHTML = hljs.highlight(`@import '${url}';`, {language: 'css'}).value
      html.innerHTML = hljs.highlight(`<link rel="stylesheet"\n\thref="${url}" />`, {language: 'html'}).value

      document.querySelectorAll('code[data-bundle-path]').forEach(code => {
        code.textContent = cdn.host + code.dataset.bundlePath
      })
    })
  })
</script>

<style>
  table code[data-bundle-path] {
    color: #fff;
  }
</style>

<br>

## Bundles

If you need smaller stylesheets, use one of the following, smaller, partial bundles:

<div style="overflow-x: auto">
  <table>
    <caption>
      Partial Bundles <br>
    </caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Size</th>
        <th>URL</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Markdown</td>
        <td>
          <img
            src="https://img.shields.io/github/size/loreanvictor/nokss/bundles/md.css.br?branch=gh-pages&color=black&label=%20&style=flat-square"
            alt="md bundle size">
        </td>
        <td>
          <pre><code data-bundle-path="/dist/bundles/md.css">https://unpkg.com/nokss/dist/bundles/md.css</code></pre>
        </td>
        <td>
          Styles standard markdown elements.
        </td>
      </tr>
      <tr>
        <td>Basic</td>
        <td>
          <img
            src="https://img.shields.io/github/size/loreanvictor/nokss/bundles/basic.css.br?branch=gh-pages&color=black&label=%20&style=flat-square"
            alt="basic bundle size">
        </td>
        <td>
          <pre><code data-bundle-path="/dist/bundles/basic.css">https://unpkg.com/nokss/dist/bundles/basic.css</code></pre>
        </td>
        <td>
          Markdown plus buttons.
        </td>
      </tr>
      <tr>
        <td>Slick</td>
        <td>
          <img
            src="https://img.shields.io/github/size/loreanvictor/nokss/bundles/slick.css.br?branch=gh-pages&color=black&label=%20&style=flat-square"
            alt="slick bundle size">
        </td>
        <td>
          <pre><code data-bundle-path="/dist/bundles/slick.css">https://unpkg.com/nokss/dist/bundles/slick.css</code></pre>
        </td>
        <td>
          Basic plus general layouts.
        </td>
      </tr>
      <tr>
        <td>Formal</td>
        <td>
          <img
            src="https://img.shields.io/github/size/loreanvictor/nokss/bundles/formal.css.br?branch=gh-pages&color=black&label=%20&style=flat-square"
            alt="formal bundle size">
        </td>
        <td>
          <pre><code data-bundle-path="/dist/bundles/formal.css">https://unpkg.com/nokss/dist/bundles/formal.css</code></pre>
        </td>
        <td>
          Basic plus form elements.
        </td>
      </tr>
      <tr>
        <td>Slick Formal</td>
        <td>
          <img
            src="https://img.shields.io/github/size/loreanvictor/nokss/bundles/slick-formal.css.br?branch=gh-pages&color=black&label=%20&style=flat-square"
            alt="slick formal bundle size">
        </td>
        <td>
          <pre><code data-bundle-path="/dist/bundles/slick-formal.css">https://unpkg.com/nokss/dist/bundles/slick-formal.css</code></pre>
        </td>
        <td>
          Slick plus form elements.
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div align="end" style="opacity: 0.5">
  <small>Size calculated by zipping with <a href="https://github.com/google/brotli">Brotli</a></small>
</div>

<br>

> **About Bundles**
>
> Toolbars, modals, feeds and cards are not included in any of the partial bundles. They are only available in the full bundle. Also make sure
> to use one bundle at a time, otherwise you'll end up with duplicate styles.

</section>