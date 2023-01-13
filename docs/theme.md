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
  --primary-color: #1f6feb;
  --primary-text-color: #fff;
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

<br><br>

The following are the main CSS variables determining styling of various elements:

- **Primary Color** \
  The primary color for highlighted text and actions. Also comes with _primary text color_,
  which is the color of the text that is to be used on backgrounds with primary color.
  ```css
  :root {
    --primary-color: #1f6feb;
    --primary-text-color: #fff;
  }
  ```
  <br>

- **Background & Text** \
  Determine the background and text color of the content. Since these values are typically
  dependent on color scheme, make sure to use `prefers-color-scheme` media query to maintain dark mode support.
  ```css
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
  <br>

- **Danger Color** \
  Danger color denotes elements that have potentially harmful (and irreversible) effects, or states of error. _Danger text color_ is the  color of text that is to be used on backgrounds with danger color.
  ```css
  :root {
    --danger-color: #ff2626;
    --danger-text-color: #fff;
  }
  ```
  <br>

- **Borders** \
  Border expression determines how visible borders are, `0` being invisible and `1` being fully visible.
  Roundness determines roundness of corners of various elements. Different elements will calculate their border radius
  using this global variable.
  ```css
  :root {
    --roundness: 5px;
    --border-expression: 0.05;
  }
  ```
  <br>

- **Spacing** \
  Spacing of various elements is generally determined by the spacing variable. This particular variable can be a bit tricky to modify, so I would recommend overriding specific spacing values of different elements instead of the global one.
  ```css
  :root {
    --spacing: 8px;
  }
  ```
  <br>

Besides these global values, each element also relies on its own specific variables, which are by default calculated from these global values, and can be overriden for customizing the look of individual elements.

</section>