<section>

# Range Input

Range inputs (`<input type="range">`) are styled according to the theme. Note that not all browsers expose the same
styling options for range inputs, so the appearance may vary.

```html
<input type='range' aria-label='some range'/>
```

<div role="presentation">
  <input type='range' aria-label='some range' />
</div>

<br>

Range inputs can also be used in a toolbar:

```html
<menu role="toolbar">
  <button>A</button>
  <button>B</button>
  <input type='range' aria-label='some range'/>
  <button>C</button>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <button>A</button>
    <button>B</button>
    <input type='range' aria-label='some range'/>
    <button>C</button>
  </menu>
</div>

<br>

## Customization

In addition to [global CSS variables](#theming), you can further customize range inputs via the following CSS variables, displayed with their default values:

```css
:root {
  --range-input-track-height: 2px;
  --range-input-thumb-width: var(--button-height);
  --range-input-thumb-height: calc(var(--button-height) * 2 / 3);
  --range-input-margin: calc(var(--range-input-thumb-height) + var(--spacing)) 0;
  --range-input-empty-track-inversion: 0.12;
}
```

<br>

For example, you can create a range input with a smaller, round thumb by setting the following variables:

```css
input[type='range'] {
  --range-input-thumb-width: 1.25rem;
  --range-input-thumb-height: 1.25rem;
  --roundness: 1.25rem;
}
```

<div role="presentation">
  <input type='range' aria-label='some range'
    style='--range-input-thumb-width: 1.25rem; --range-input-thumb-height: 1.25rem; --roundness: 1.25rem' />
</div>

</section>
