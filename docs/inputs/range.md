<section>

# Range Input

Range inputs (`<input type="range">`) are styled according to the theme. Note that not all browsers expose the same
styling options for range inputs, so the appearance may vary (currently best result is in Firefox).

```html
<input type='range' min='0' max='100' />
```

<div role="presentation">
  <input type='range' min='0' max='100' />
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
  <input type='range' style='--range-input-thumb-width: 1.25rem; --range-input-thumb-height: 1.25rem; --roundness: 1.25rem' />
</div>

</section>
