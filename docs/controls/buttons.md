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
  <a role="button">Anchor</a>
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

### Customization

Tweak [global CSS variables](#theming) for customizing buttons. If you need further customization, you can use following CSS variables:
```css
:root {
  --button-height: var(--interactable-size);
  --button-min-width: calc(var(--button-height) * 3);
  --button-padding: 0px var(--spacing);
}
```

<br>

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

</section>