<section>

## Modals

Use `<dialog>` element to create and display a modal:

```html
<button onclick="document.querySelector('#modal-1').showModal()">Show Modal</button>
<dialog id="modal-1">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <footer>
    <form method="dialog" align="end" role="group">
      <button>Whatever</button>
      <button>Got It</button>
    </form>
  </footer>
</dialog>
```

<div role="presentation">
  <button onclick="document.querySelector('#modal-1').showModal()">Show Modal</button>
  <dialog id="modal-1">
    <h2>Lorem ispum</h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <footer>
      <form method="dialog" align="end" role="group">
        <button>Whatever</button>
        <button>Got It</button>
      </form>
    </footer>
  </dialog>
</div>

<br>

> Make sure you use the `.showModal()` method for opening the dialog. [Checkout MDN's guides](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) to learn more about the `<dialog>` element.

<br>

Use `<header>` and `<footer>` elements to add a header and footer to the modal.

```html
<dialog>
  <header><h2>Modal with header</h2></header>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <footer>
    <form method="dialog" align="end">
      <button>Close</button>
    </form>
  </footer>
</dialog>
```

<div role="presentation">
  <button onclick="document.querySelector('#modal-2').showModal()">Show Modal</button>
  <dialog id="modal-2">
    <header>
      <h3>Modal with header</h3>
    </header>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    <footer>
      <form method="dialog" align="end">
        <button>Close</button>
      </form>
    </footer>
  </dialog>
</div>

<br>

### Modal Animations

Set `--modal-animation` property to change the animation of the modal. This needs to be the name of the animation you want to use. _nokss_ provides some animations out of the box, which you can try in the example below:

<div id="modal-anim-pres">

<menu role="radiogroup" align="end">
  <button role="radio" aria-checked="true">Grow In</button>
  <button role="radio">Drop In</button>
  <button role="radio">Fade In</button>
</menu>

```css
#my-modal {
  --modal-animation: grow-in;
}
```
```html
<dialog id="my-modal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  <footer role="group" align="end">
      <button onclick="document.querySelector('#grow-modal').close()">
        Ok
      </button>
  </footer>
</dialog>
```

<div role="presentation">
  <button onclick="document.querySelector('#my-modal').showModal()">
    Show Modal
  </button>
  <dialog id="my-modal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <footer role="group" align="end">
      <button onclick="document.querySelector('#my-modal').close()">
        Ok
      </button>
    </footer>
  </dialog>
</div>

<style>
#my-modal {
  --modal-animation: grow-modal-in;
}
</style>

<script type="module" defer>
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/highlight.min.js'


const host = document.querySelector('#modal-anim-pres')
const radio = host.querySelector('[role="radiogroup"]')
const css = host.querySelector('pre:first-of-type code')
const style = host.querySelector('style')

const animations = {
  'Grow In': 'grow-in',
  'Drop In': 'drop-in',
  'Fade In': 'fade-in',
}

const template = anim => `#my-modal {
  --modal-animation: ${anim};
}`

radio.addEventListener('click', () => {
  const anim = animations[radio.querySelector('[aria-checked="true"]').textContent]
  style.textContent = template(anim)
  css.innerHTML = hljs.highlight('css', template(anim)).value
})
</script>

</div>

<br>

### Customization

Tweak [global CSS variables](#theming) for customizing modals. If you need further customization, you can use following CSS variables:

<div style="overflow-x: auto">
  <table>
    <caption>Modal CSS Variables</caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--modal-width</code></td>
        <td><code>512px</code></td>
        <td>Width of the modal.</td>
      </tr>
      <tr>
        <td><code>--modal<br>&emsp;-backdrop-blur</code></td>
        <td><code>8px</code></td>
        <td>Blurring behind modal's backdrop</td>
      </tr>
      <tr>
        <td><code>--modal<br>&emsp;-backdrop<br>&emsp;-background</code></td>
        <td><code>rgba(0 0 0 / 50%)</code></td>
        <td>Background of modal's backdrop</td>
      </tr>
      <tr>
        <td><code>--modal<br>&emsp;-background<br>&emsp;-brightness</code></td>
        <td><code>2</code></td>
        <td><p>Brightness of the modal's background, relative to page's background.</p></td>
      </tr>
      <tr>
        <td><code>--modal<br>&emsp;-animation</code></td>
        <td><code>grow-in</code></td>
        <td><p>
          The animation to display when a modal is opened. Can be the name of any custom defined animation. See <a href="#modal-animations">animations</a> section for mor edetails.
        </p></td>
      </tr>
    </tbody>
  </table>
</div>

> **Customization Note**
>
> Dialog backdrop DOES NOT inherit root scope variables. Override modal related variables for `:root` AND `::backdrop`:
>
> ```css
> :root,
> ::backdrop {
>   --modal-backdrop-background: rgba(128 128 128 / 25%);
>   --modal-backdrop-blur: 32px;
> }

</section>