<section id="theming">

# Theming

_nokss_ exposes CSS variables for customizing the look and feel of your pages. 
Change the main theme values in the code below and see their effects on the page:

<menu role="toolbar">
  <menu role="radiogroup" data-key="--roundness">
    <button role="radio" value="1px" aria-label="sharp corners">
      <span class="corner-mark sharp"></span>
    </button>
    <button role="radio" value="5px" aria-label="round corners">
      <span class="corner-mark round"></span>
    </button>
    <button role="radio" value="24px" aria-label="circular corners">
      <span class="corner-mark circle"></span>
    </button>
  </menu>
  <hr/>
  <menu role="radiogroup" data-key="--primary-color;--primary-text-color;light:--primary-color;light:--primary-text-color;dark:--primary-color;dark:--primary-text-color">
    <button role="radio" value="var(--text-color);var(--background-color)" aria-label="monochrome">
      <span class="color-mark" style="background: var(--text-color)"></span>
    </button>
    <button role="radio" value="#1f6feb;#fff" aria-label="github blue">
      <span class="color-mark" style="background: #1f6feb"></span>
    </button>
    <button role="radio" value="#1dB954;#000" aria-label="spotify green">
      <span class="color-mark" style="background: #1dB954"></span>
    </button>
    <button role="radio" value="#ff9900;#000" aria-label="amazon orange">
      <span class="color-mark" style="background: #ff9900"></span>
    </button>
    <button role="radio" value="#ff5a5f;#fff" aria-label="airbnb red">
      <span class="color-mark" style="background: #ff5a5f"></span>
    </button>
    <button role="radio" value=";;#833ab4;#fff;#e1306c;#fff" aria-label="lyft pink">
      <span class="color-mark light" style="background: #833ab4"></span>
      <span class="color-mark dark" style="background: #e1306c"></span>
    </button>
  </menu>
  <hr/>
  <menu role="radiogroup" data-key="light:--background-color;light:--text-color;dark:--background-color;dark:--text-color;light:--interactable-brightness;light:--border-expression;dark:--interactable-brightness;dark:--border-expression;--input-idle-border-color">
    <button role="radio" value="#fffdf9;#393e46;#0d1118;#fffcf3" aria-label="midnight">
      <span class="color-mark light bg" style="background: #fffdf9"></span>
      <span class="color-mark dark bg" style="background: #0d1118"></span>
    </button>
    <button role="radio" value="#f3efe0;#222222;#222222;#f3efe0;;;1.25;.05" aria-label="printish">
      <span class="color-mark light bg" style="background: #f3efe0"></span>
      <span class="color-mark dark bg" style="background: #222222"></span>
    </button>
    <button role="radio" value="#f5f5f5;#000;#111;#fff;0.97;0;1.35;0" aria-label="classic">
      <span class="color-mark light bg" style="background: #f5f5f5"></span>
      <span class="color-mark dark bg" style="background: #111"></span>
    </button>
    <button role="radio" value="#000;var(--primary-color);#000;var(--primary-color);1;1;1;1;var(--text-color)" aria-label="terminal">
      <span class="color-mark light bg" style="background: #000"></span>
      <span class="color-mark dark bg" style="background: #000"></span>
    </button>
  </menu>
</menu>

<div class="theme-preview">

```css
:root {
  --primary-text-color: #fff;
  --primary-color: #1f6feb;
  --roundness: 5px;
}

@media (prefers-color-scheme: light) {
  :root {
    --background-color: #fffdf9;
    --text-color: #393e46;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #0d1118;
    --text-color: #fffcf3;
  }
}
```

<div role="presentation">
  <h2>Lorem ipsum</h2>

  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  <menu role="group" align="right">
    <button>Finibus</button>
    <button>Bonorum</button>
  </menu>
</div>

</div>

<style id="target">
</style>

<link rel="stylesheet" href="assets/theme.css" />
<script type="module" defer src="assets/theme.js"></script>

<div style="overflow-x: auto">
  <table>
    <caption>Theme's CSS Variables</caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--primary-color</code></td>
        <td><code>#1f6feb</code></td>
        <td>The primary color for highlighted text and actions.</td>
      </tr>
      <tr>
        <td><code>--primary-text-color</code></td>
        <td><code>#fff</code></td>
        <td>The color of the text that is to be used on backgrounds with primary color.</td>
      </tr>
      <tr>
        <td><code>--text-color</code></td>
        <td><code>#393e46</code> <small>(light)</small><br><code>#fffcf3</code> <small>(dark)</small></td>
        <td>Color of text.</td>
      </tr>
      <tr>
        <td><code>--background-color</code></td>
        <td><code>#fffdf9</code> <small>(light)</small><br><code>#0d1118</code> <small>(dark)</small></td>
        <td>Color of background.</td>
      </tr>
      <tr>
        <td><code>--danger-color</code></td>
        <td><code>#ff2626</code></td>
        <td>Denotes potentially harmful actions, or error states.</td>
      </tr>
      <tr>
        <td><code>--danger-text-color</code></td>
        <td><code>#fff</code></td>
        <td>Denotes potentially harmful actions, or error states.</td>
      </tr>
      <tr>
        <td><code>--roundness</code></td>
        <td><code>5px</code></td>
        <td>Determines how round various elements are (e.g. border radius).</td>
      </tr>
      <tr>
        <td><code>--border-expression</code></td>
        <td><code>0.05</code></td>
        <td>Determines how visible borders are, <code>0</code> being invisible and <code>1</code> being fully visible.</td>
      </tr>
      <tr>
        <td><code>--spacing</code></td>
        <td><code>8px</code></td>
        <td><p>Specifies the spacing between various elements. It is highly recommended to modify spacing per element instead of tweaking the global version.</p></td>
      </tr>
    </tbody>
  </table>
</div>

Besides these global values, each element also relies on its own specific variables, which are by default calculated from these global values, and can be overriden for customizing the look of individual elements.

</section>