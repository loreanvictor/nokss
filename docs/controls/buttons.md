<section>

## Buttons

Use `<button>`, `<a role="button">` or `<input type="submit">` to create buttons:

```html
<button>Button</button>
```

<div role="presentation">
  <button>Button</button>
</div>

```html
<a role="button">Anchor</a>
```
<div role="presentation">
  <a role="button" href="https://google.com"><b>A</b>nchor</a>
</div>

```html
<input type="submit" value="Submit" />
```
<div role="presentation">
  <input type="submit" value="Submit" />
</div>

<br>

### Button Groups

Group buttons to give all but the last one a _secondary_ actions style:

```html
<menu role="group">
  <button>Secondary</button>
  <button>Primary</button>
</menu>
```

<div role="presentation">
  <menu role="group">
    <button>Secondary</button>
    <button>Primary</button>
  </menu>
</div>

<br>

Use `align` attribute to align buttons in a menu to the left or right:
```html
<menu role="group" align="right">
  <button>Secondary</button>
  <button>Primary</button>
</menu>
```
<div role="presentation">
  <menu role="group" align="right">
    <button>Secondary</button>
    <button>Primary</button>
  </menu>
</div>

> Since `align` is unfortunately obsolete, for grouping menus you can use CSS with `text-align` instead:
> ```html
> <menu role="group" style="text-align: right">
> ...
> </menu>
> ```

<br>

### Icon Buttons

Use `aria-label` to style buttons as icon buttons:

```html
<button aria-label="send">➤</button>
```

<div role="presentation">
  <button aria-label="send" class="icon">➤</button>
</div>

> **Using Icon Fonts**
>
> Here, an icon font is being used for the icon to be displayed. However, using icon fonts MUST BE done with
> a lot of care, as they mostly [cause accessibility issues](https://www.youtube.com/watch?v=9xXBYcWgCHA). Use an icon font
> that falls back to characters browsers can display naturally even if the font is not loaded (or is changed), without scrambling the layout.
>
> For this example, and this document in general, [graphis icon font](https://graphis.ink) is used, which uses similar looking emojis as fallback.

<br>

### Disabled Buttons

Buttons having `disabled` attribute will be styled as disabled:

```html
<button disabled>Disabled</button>
```

<div role="presentation">
  <button disabled>Disabled</button>
</div>

<br/>

### Dangerous Buttons

Denote a dangerous action by starting `aria-description` of the button with `"danger"` (or `"Danger"`):

```html
<button aria-description="dangerously removes the file">Remove</button>
```

<div role="presentation">
  <button aria-description="dangerously removes the file">
    Remove
  </button>
</div>

```html
<menu role="group">
  <button aria-description="Danger: deletes the draft">
    Delete Draft
  </button>
  <button>Publish</button>
</menu>
```

<div role="presentation">
  <menu role="group">
    <button aria-description="Danger: deletes the draft">
      Delete Draft
    </button>
    <button>Publish</button>
  </menu>
</div>

<br>

### Status Badges in Buttons

Use `role="status"` to add a status badge (such as a counter) to a button:

```html
<button>
  Star <span role="status">3</span>
</button>
```

<div role="presentation">
  <button>
    Star <span role="status">3</span>
  </button>
</div>

```html
<menu role="group">
  <button>
    Watch <span role="status">450k+</span>
  </button>
  <button>
    Fork <span role="status">32</span>
  </button>
  <button aria-description="danger">
    Delete <span role="status">∞</span>
  </button>
</menu>
```

<div role="presentation">
  <menu role="group">
    <button>
      Watch <span role="status">450k+</span>
    </button>
    <button>
      Fork <span role="status">32</span>
    </button>
    <button aria-description="danger">
      Delete <span role="status">∞</span>
    </button>
  </menu>
</div>

<br>

<h3 id="button-customization">Customization</h3>

Tweak [global CSS variables](#theming) for customizing buttons. If you need further customization, you can use following CSS variables:

<div style="overflow-x: auto">
  <table>
    <caption>Button CSS Variables</caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--button-height</code></td>
        <td><code>var(--interactable-size)</code></td>
        <td>Height of the button</td>
      </tr>
      <tr>
        <td><code>--button-min-width</code></td>
        <td><code>calc(var(--button-height) * 3)</code></td>
        <td>Minimum width of the button</td>
      </tr>
      <tr>
        <td><code>--button-padding</code></td>
        <td><code>0 var(--spacing)</code></td>
        <td>Padding of the button</td>
      </tr>
      <tr>
        <td><code>--primary-button<br>&emsp;-hover-brightness</code></td>
        <td><code>1.2</code></td>
        <td>Brightness of primary buttons when hovered.</td>
      </tr>
      <tr>
        <td><code>--primary-button<br>&emsp;-border-brightness</code></td>
        <td><code>0.9</code> <small>(light)</small><br><code>1.2</code> <small>(dark)</small></td>
        <td><p>Brightness of border of primary buttons (relative to their background).</p></td>
      </tr>
      <tr>
        <td><code>--secondary-button<br>&emsp;-active-opacity</code></td>
        <td><code>calc(1 - (1 - <br>&emsp;var(--active-opacity))<br>&emsp; * 2)</code> <small>(light)</small>
          <br><code>var(--active-opacity)</code> <small>(dark)</small></td>
        <td>Opacity of secondary buttons when active.</td>
      </tr>
    </tbody>
  </table>
</div>

For example, you can create a slimmer rounded button by setting the following variables:

```css
button {
  --button-height: calc(var(--interactable-size) * 0.75);
  --roundness: var(--button-height);
}
```

<div role="presentation">
  <style>
  .slim-round-btn {
    --button-height: calc(var(--interactable-size) * 0.75);
    --roundness: var(--button-height)
  }
  </style>
  <button class="slim-round-btn">Click ME!</button>
</div>

<br>

Or you can create a `.fab` class for floating action buttons:

```css
.fab {
  --button-height: calc(var(--interactable-size) * 1.5);
  --button-min-width: var(--button-height);
  --roundness: 50%;
}
```
```html
<button class="fab">🚀</button>
```

<div role="presentation">
  <style>
  .fab {
    --button-height: calc(var(--interactable-size) * 1.5);
    --button-min-width: var(--button-height);
    --roundness: 50%;
  }
  </style>
  <button class="fab icon">🚀</button>
</div>

</section>