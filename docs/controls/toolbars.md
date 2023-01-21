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

You can combine vertical toolbars with `<details>` element to create
drop-in menus:

```html
<details>
  <summary role="button">
    Options ▾
  </summary>
  <div>
    <menu role="toolbar" aria-orientation="vertical">
      <button>Do this</button>
      <button>Or do that</button>
    </menu>
  </div>
</details>
```

<div role="presentation">
  <details>
    <summary role="button">
      Options ▾
    </summary>
    <div>
      <menu role="toolbar" aria-orientation="vertical">
        <button>Do this</button>
        <button>Or do that</button>
      </menu>
    </div>
  </details>
</div>

Or even as part of a composite button:

```html
<menu role="toolbar">
  <button>Something</button>
  <details>
    <summary role="button" aria-label="more">
      ⋮
    </summary>
    <div>
      <menu role="toolbar" aria-orientation="vertical">
        <button>Hellow</button>
        <button>World</button>
        <button>Goodbye Blue Sky</button>
      </menu>
    </div>
  </details>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <button>Something</button>
    <details>
      <summary role="button" aria-label="more" class="icon">
        ⋮
      </summary>
      <div>
        <menu role="toolbar" aria-orientation="vertical">
          <button>Hellow</button>
          <button>World</button>
          <button>Goodbye Blue Sky</button>
        </menu>
      </div>
    </details>
  </menu>
</div>

> **Usage Note**
>
> Make sure to use `role="button"` on the `<summary>` element. Also make sure to
> wrap the toolbar in a `<div>` element so that it can be positioned correctly.

### Customization

Tweak [global CSS variables](#theming) for customizing toolbars. If you need further customization, you can use following CSS variables:

<div style="overflow-x: auto">
  <table>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--toolbar-spacer-gap</code></td>
        <td><code>calc(var(--spacing) * 4)</code></td>
        <td>Gap between toolbar buttons</td>
      </tr>
      <tr>
        <td><code>--toolbar-spacer-margin</code></td>
        <td><code>calc(var(--spacing) / 2)</code></td>
        <td>Margin around toolbar spacers</td>
      </tr>
    </tbody>
  </table>
</div>

</section>