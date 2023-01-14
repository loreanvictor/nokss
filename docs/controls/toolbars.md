<section>

## Toolbars

Use `role="toolbar"` to group some buttons together and display them like a toolbar:

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

Use `aria-orientation="vertical"` to display a vertical toolbar:

```html
<div style="display: flex; gap: var(--spacing)">
  <menu role="toolbar" aria-orientation="vertical">
    <button aria-label="done">✔</button>
    <button aria-label="delete">🗑</button>
    <button aria-label="share">↥</button>
  </menu>
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ...
  </p>
</div>
```

<div role="presentation">
  <div style="display: flex;gap: var(--spacing)">
    <menu role="toolbar" aria-orientation="vertical">
      <button aria-label="done" class="icon">✔</button>
      <button aria-label="delete" class="icon">🗑</button>
      <button aria-label="share" class="icon">↥</button>
    </menu>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ...
    </p>
  </div>
</div>

<br>

### Customization

Tweak [global CSS variables](#theming) for customizing toolbars. If you need further customization, you can use following CSS variables::

```css
:root {
  --toolbar-spacer-gap: calc(var(--spacing) * 4);
  --toolbar-spacer-margin: calc(var(--spacing) / 2);
}
```

</section>