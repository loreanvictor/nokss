<section>

## Switches

Use `role="switch"` on buttons to turn them into switches that can be turned on or off:

```html
<button role="switch" aria-checked="false">
  <span>Inactive</span>
  <span>Active</span>
</button>
```

<div role="presentation">
  <button role="switch" aria-checked="false">
    <span>Inactive</span>
    <span>Active</span>
  </button>
</div>

<br>

A switch must have either one or two child elements, the first one acting as the label for inactive state, the second one for the active state.

```html
<menu role="toolbar">
  <button role="switch" aria-checked="false" aria-label="camera">
    <span>🎦</span>
    <span>🎥</span>
  </button>
  <button role="switch" aria-checked="true" aria-label="microphone">
    <span>🎤</span>
    <span>🎙</span>
  </button>
  <button aria-label="raise hand">🤚</button>
  <button aria-label="end call" aria-description="dangerously end call">
    📵
  </button>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <button role="switch" aria-checked="false" class="icon" aria-label="camera">
      <span>🎦</span>
      <span>🎥</span>
    </button>
    <button role="switch" aria-checked="true" class="icon" aria-label="microphone">
      <span>🎤</span>
      <span>🎙</span>
    </button>
    <button aria-label="raise hand" class="icon">🤚</button>
    <button aria-label="end call" aria-description="dangerously end call" class="icon">
      📵
    </button>
  </menu>
</div>

<br>

Switches can also denote dangerous states by adding an `aria-description` attribute starting with `"danger"` (or `"Danger"`):

```html
<button role="switch"
  aria-checked="false"
  aria-description="danger: turns on expert mode.">
  <span>Expert Mode: Off</span>
  <span>Expert Mode: On</span>
</button>
```

<div role="presentation">
  <button role="switch"
    aria-checked="false"
    aria-description="danger: turns on expert mode.">
    <span>Expert Mode: Off</span>
    <span>Expert Mode: On</span>
  </button>
</div>

<br>

> The behavior of switches needs to be added with JavaScript. Use `aria-checked="true"` to turn the switch on or off:
> ```js
> document.querySelectorAll('[role="switch"]').forEach(sw => {
>   sw.addEventListener('click', () => {
>     sw.setAttribute(
>       'aria-checked',
>       sw.getAttribute('aria-checked') === 'true' ? 'false' : 'true'
>     )
>   }) 
> })

</section>