## Buttons

Buttons are primary styled by default:

```html
<button>Click me</button>
```

<div class="demo">
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

<div class="demo">
  <menu role="group">
    <button>Secondary</button>
    <button>Primary</button>
  </menu>
</div>

<br>

Buttons in a toolbar have no primary and are styled differently:

```html
<menu role="toolbar">
  <button>A</button>
  <button>B</button>
  <button>Longer</button>
</menu>
```

<div class="demo">
  <menu role="toolbar">
    <button>A</button>
    <button>B</button>
    <button>Longer</button>
  </menu>
</div>