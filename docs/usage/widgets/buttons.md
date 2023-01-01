<section>

## Buttons

Buttons are primary styled by default:

```html
<button>Click me</button>
```

<div role="presentation">
  <button>Click me</button>
</div>

<br>

If buttons are grouped, only the last one is styled primary, the rest will have a secondary style:

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

Buttons with `aria-label` will be styled as icons:

```html
<button aria-label="send">➤</button>
```

<div role="presentation">
  <button aria-label="send" class="icon">➤</button>
</div>

> Here, an icon font is being used for the icon to be displayed. However, using icon fonts MUST BE done with
> a lot of care, as they mostly [cause accessibility issues](https://www.youtube.com/watch?v=9xXBYcWgCHA). Use an icon font
> that falls back to characters the browsers can display naturally even if the font is not loaded (or is changed). For this example,
> [graphis](https://graphis.ink) icon font is used, which uses emojis as fallbacks.

<br>

Buttons in a toolbar have no primary and are styled differently:

```html
<menu role="toolbar">
  <button aria-label="edit">✏️</button>
  <button aria-label="like">❤️</button>
  <button>Longer</button>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <button aria-label="edit">✏️</button>
    <button aria-label="like">❤️</button>
    <button>Longer</button>
  </menu>
</div>

<br>

Buttons in a tablist will be styled as tabs:

```html
<nav role="tablist">
  <button role="tab" aria-selected="true">First</button>
  <button role="tab">Second</button>
  <button role="tab">Third</button>
</nav>
```

<div role="presentation">
  <nav role="tablist">
    <button role="tab" aria-selected="true">First</button>
    <button role="tab">Second</button>
    <button role="tab">Third</button>
  </nav>
</div>

</section>