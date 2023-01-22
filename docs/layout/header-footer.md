<section>

## Header & Footer

Use `<header>` and `<footer>` elements directly in the `<body>` element to create a header and footer for the entire page:

```html
<body>
  <header>
    Header stuff
  </header>
  <main>
    ...
  </main>
  <footer>
    Footer stuff
  </footer>
</body>
```

<br>

Main header and footer are sticky by default, which can be overriden using CSS:

```css
body > footer {
  position: initial;
}
```

<br>

You can customize main header and footer using the following CSS variables:

<div style="overflow-x: auto">
  <table>
    <caption>
      Footer CSS Variables
    </caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--footer-blur</code></td>
        <td><code>16px</code></td>
        <td>Backdrop blur of the footer</td>
      </tr>
      <tr>
        <td><code>--footer-brightness</code></td>
        <td><code>var(--sidebar-brightness)</code></td>
        <td>Brightness of the footer (relative to the background)</td>
      </tr>
      <tr>
        <td><code>--footer-background</code></td>
        <td><code>var(--background-color)</code></td>
        <td>Background of the footer</td>
      </tr>
      <tr>
        <td><code>--footer-background<br>&emsp;-opacity</code></td>
        <td><code>0.65</code></td>
        <td>Background opacity of the footer</td>
      </tr>
      <tr>
        <td><code>--footer-padding</code></td>
        <td><code>var(--spacing)<br>calc(2 * var(--spacing))</code></td>
        <td>Padding of footer content</td>
      </tr>
    </tbody>
  </table>
</div>

<div style="overflow-x: auto">
  <table>
    <caption>
      Header CSS Variables
    </caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--header-blur</code></td>
        <td><code>var(--footer-blur)</code></td>
        <td>Backdrop blur of the header</td>
      </tr>
      <tr>
        <td><code>--header-brightness</code></td>
        <td><code>var(--footer-brightness)</code></td>
        <td>Brightness of the header (relative to the background)</td>
      </tr>
      <tr>
        <td><code>--header-background</code></td>
        <td><code>var(--footer-background)</code></td>
        <td>Background of the header</td>
      </tr>
      <tr>
        <td><code>--header-background<br>&emsp;-opacity</code></td>
        <td><code>var(--footer-background<br>&emsp;-opacity)</code></td>
        <td>Background opacity of the header</td>
      </tr>
      <tr>
        <td><code>--header-padding</code></td>
        <td><code>var(--footer-padding)</code></td>
        <td>Padding of header content</td>
      </tr>
    </tbody>
  </table>
</div>


</section>