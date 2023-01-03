<section>

# Buttons

Buttons are primary styled by default:

```html
<button>Click me</button>
```

<div role="presentation">
  <button>Click me</button>
</div>

<br>

## Button Groups

If buttons are grouped under a menu, only the last one is styled primary, the rest will have a secondary style:

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

## Icon Buttons

Buttons with `aria-label` will be styled as icon buttons:

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

## Disabled Buttons

Buttons having `disabled` attribute will be styled as disabled:

```html
<button disabled>Disabled</button>
```

<div role="presentation">
  <button disabled>Disabled</button>
</div>

<br/>

## Customization

In addition to [generic CSS variables](#theming), you can customize buttons via the following CSS variables, displayed with their default values:
```css
:root {
  --button-border-radius: var(--roundness);
  --button-min-width: 96px;
  --button-height: 32px;
  --button-padding: 0px var(--spacing);
}
```
Note that on smaller devices, buttons will be larger by default for better touchability:
```css
@media (max-width: 768px) {
  :root {
    --button-height: 48px;
    --button-min-width: 112px;
  }
}
```

</section>