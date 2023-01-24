<section>

## Tab Lists

Use `role="tablist"` to create tab lists:

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

<br>

Use anchors (`<a role="tab">`) instead of buttons for more link-like tab lists:

```html
<nav role="tablist">
  <a role="tab" aria-selected="true">First</a>
  <a role="tab">Second</a>
  <a role="tab">Third</a>
</nav>
```

<div role="presentation">
  <nav role="tablist">
    <a role="tab" aria-selected="true">First</a>
    <a role="tab">Second</a>
    <a role="tab">Third</a>
  </nav>
  <br>
</div>

<br>

> The behavior for tab lists needs to be added with JavaScript. Use `aria-selected="true"` to mark a selected element:
> ```js
> document.querySelectorAll(
>   '[role="tablist"]>:is(button, [role="tab"]]'
> ).forEach(button => {
>   button.addEventListener('click', () => {
>     /* Make sure only one item is selected at a time */
>     button.parentNode.querySelectorAll('button').forEach
>       (btn => btn.setAttribute('aria-selected', false)
>     )
>     button.setAttribute('aria-selected', true)
>   })
> })
> ```

</section>