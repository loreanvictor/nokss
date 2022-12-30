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

Buttons in a toolbar have no primary and are styled differently:

```html
<menu role="toolbar">
  <button>✏️</button>
  <button>❤️</button>
  <button>Longer</button>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <button>✏️</button>
    <button>❤️</button>
    <button>Longer</button>
  </menu>
</div>

<br>

Buttons in a tablist will be styled as tabs:

```html
<nav role="tablist">
  <button aria-selected="true">First</button>
  <button>Second</button>
  <button>Third</button>
</nav>
```

<div role="presentation">
  <nav role="tablist">
    <button aria-selected="true">First</button>
    <button>Second</button>
    <button>Third</button>
  </nav>

  <script>
    document.scripts[document.scripts.length - 1].parentNode.querySelectorAll('nav[role="tablist"] button').forEach(button => {
      button.addEventListener('click', () => {
        button.parentNode.querySelectorAll('button').forEach(btn => btn.setAttribute('aria-selected', false))
        button.setAttribute('aria-selected', true)
      })
    })
  </script>
</div>

<br><br>
