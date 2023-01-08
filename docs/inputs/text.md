<section>

# Text Inputs

Textual inputs are automatically styled:

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

So are text areas:

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

Text inputs can also be used inside horizontal toolbars:

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

## Customization

In addition to [global CSS variables](#theming), you can further customize text inputs via the following CSS variables, displayed with their default values:

```css
:root {
  --text-area-min-height: calc(2 * var(--spacing) + 2 * var(--button-height));
}
@media (prefers-color-scheme: light) {
  :root {
    --input-placeholder-expression: 0.4;
    --input-background-brightness: calc(1 - (1 - var(--interactable-brightness)) * 1.5);
    --input-background-brightness-focus-dropoff: 0.65;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --input-placeholder-expression: 0.15;
    --input-background-brightness: var(--interactable-brightness);
    --input-background-brightness-focus-dropoff: 0.25;
  }
}
```

</section>