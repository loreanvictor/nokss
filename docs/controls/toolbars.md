<section>

## Toolbars

Use a toolbar (any element with `"toolbar"` role) to group some buttons together and display them like a toolbar:

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

Toolbars can also be vertically oriented:

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

In addition to [global CSS variables](#theming), you can further customize toolbars via the following CSS variables, displayed with their default values:

```css
:root {
  --toolbar-spacer-gap: calc(var(--spacing) * 4);
  --toolbar-spacer-margin: calc(var(--spacing) / 2);
}
```

</section>