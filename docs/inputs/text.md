<section>

## Text Input

Use the `input` tag (with proper type) to create styled inputs:

```html
<input type="email" placeholder="your email"/>
<input type="password" placeholder="your password"/>
<menu role="group" align="end">
  <button>Forgot Password</button>
  <button>Login</button>
</menu>
```

<div role="presentation">
  <input type="email" placeholder="your email"/>
  <input type="password" placeholder="your password"/>
  <menu role="group" align="end">
    <button>Forgot Password</button>
    <button>Login</button>
  </menu>
</div>

<br>

Use `textarea` tag for larger inputs:

```html
<textarea placeholder="Write something ..."></textarea>
<menu role="group" align="end">
  <button>Save Draft</button>
  <button>Publish</button>
</menu>
```

<div role="presentation">
  <textarea placeholder="Write something ..."></textarea>
  <menu role="group" align="end">
    <button>Save Draft</button>
    <button>Publish</button>
  </menu>
</div>

<br>

You can use inputs inside horizontal toolbars:

```html
<menu role="toolbar">
  <input type="search" placeholder="Search something ..." />
  <button aria-label="search">🔍</button>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <input type="search" placeholder="Search something ..." />
    <button aria-label="search" class="icon">🔍</button>
  </menu>
</div>

<br>

Use attributes and ARIA attributes to determine state of the input:

```html
<input type="text" required placeholder="Required">
<input type="text" aria-invalid="true" placeholder="Invalid"/>
<input type="text" disabled placeholder="Disabled"/>
```

<div role="presentation">
  <input type="text" required placeholder="Required">
  <input type="text" aria-invalid="true" placeholder="Invalid"/>
  <input type="text" disabled placeholder="Disabled"/>
</div>

<br>

> **Invalid Inputs**
>
> You can always force invalid style for an input by setting the `aria-invalid` attribute to `true`. This is specifically useful for required inputs,
> which are not automatically styled as invalid when empty (since CSS cannot track whether the input is _touched_ or not).

<br>

<h3 id="text-input-customization">Customization</h3>

Tweak [global CSS variables](#theming) for customizing inputs. If you need further customization, you can use following CSS variables:

<div style="overflow-x: auto">
  <table>
    <caption>
      Input CSS Variables
    </caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </head>
    <tbody>
      <tr>
        <td><code>--text-area-<br>&emsp;-min-height</code></td>
        <td><code>calc(2 *<br>&emsp;var(--spacing) +<br>&emsp;2 * var(--interactable-size))</code></td>
        <td>Minimum height of text area</td>
      </tr>
      <tr>
        <td><code>--input-<br>&emsp;-idle-border-<br>&emsp;-color</code></td>
        <td><code>var(--background-color)</code></td>
        <td>Border color of input when idle</td>
      </tr>
      <tr>
        <td><code>--input-<br>&emsp;-placeholder-<br>&emsp;-expression</code></td>
        <td><code>0.4</code> <small>(light)</small><br><code>0.15</code> <small>(dark)</small></td>
        <td>Expression for calculating placeholder color</td>
      </tr>
      <tr>
        <td><code>--input-<br>&emsp;-background-<br>&emsp;-brightness</code></td>
        <td><code>calc(1 - (1 -<br>&emsp;var(--interactable-<br>&emsp;-brightness)) * 1.5)</code> <small>(light)</small><br><code>var(--interactable-<br>&emsp;-brightness)</code> <small>(dark)</small></td>
        <td>Brightness of input background</td>
      </tr>
      <tr>
        <td><code>--input-<br>&emsp;-background-<br>&emsp;-brightness-<br>&emsp;-focus-<br>&emsp;-dropoff</code></td>
        <td><code>0.65</code> <small>(light)</small><br><code>0.25</code> <small>(dark)</small></td>
        <td><p>Dropoff of input background brightness when focused</p></td>
      </tr>
    </tbody>
  </table>
</div>

</section>