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

### Customization

Tweak [global CSS variables](#theming) for customizing inputs. If you need further customization, you can use following CSS variables:

```css
:root {
  --text-area-min-height: calc(2 * var(--spacing) + 2 * var(--interactable-size));
  --input-idle-border-color: var(--background-color);
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