<section>

# Interactions

The following CSS variables generally determine various interactive aspects of the design:

```css
:root {
  --interactable-size: 32px;
  --disabled-opacity: 0.35;
}
```

On touch devices, a larger `--interactable-size` is used:

```css
@media (hover: none) and (pointer: coarse) {
  :root {
    --interactable-size: 40px;
  }
}
```

Interactable elements are generally brighter than the background, with extra brightness for hover:

```css
@media (prefers-color-scheme: light) {
  :root {
    --interactable-brightness: 0.96;
    --hover-brightness: calc(1 - (1 - var(--interactable-brightness)) * 1/10);
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --interactable-brightness: 2.25;
    --hover-brightness: calc(var(--interactable-brightness) * 1.35);
  }
}
```

</section>