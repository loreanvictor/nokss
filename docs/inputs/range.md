<section>

## Range Input

Use `<input type="range">` to create ranges and sliders:

```html
<input type="range" aria-label="some range"/>
```

<div role="presentation">
  <input type='range' aria-label='some range' />
</div>

<br>

> **Range Input Support**
>
> Browsers behave differently in how they allow customization of range inputs. This means
> that the appearance of your range inputs will vary from browser to browser.

<br>

You can use range inputs can in toolbars:

```html
<menu role="toolbar">
  <button aria-label="play/pause" role="switch" aria-checked="false">
    <span>▶</span>
    <span>║</span>
  </button>
  <button aria-label="stop">▢</button>
  <input type="range" aria-label="timeline"
    style="--range-input-thumb-width: 16px"/>
  <button>Subtitle</button>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <button aria-label="play/pause" role="switch" aria-checked="false">
      <span class="icon">▶</span>
      <span class="icon">║</span>
    </button>
    <button aria-label="stop" class="icon">▢</button>
    <input type='range' aria-label='timeline' style='--range-input-thumb-width: 16px'/>
    <button>Subtitle</button>
  </menu>
</div>

<br>

Using range inputs in vertical toolbars requires a little bit of a work around:

```html
<menu role="toolbar" aria-orientation="vertical">
  <div class="--vertical-range-container">
    <input type="range" aria-label="volume"/>
  </div>
  <button aria-label="mute" role="switch" aria-checked="false">
    <span>🔇</span>
  </button>
</menu>
```

<div role="presentation" align="center">
  <menu role="toolbar" aria-orientation='vertical'>
    <div class="--vertical-range-container">
      <input type='range' aria-label='volume'/>
    </div>
    <button aria-label="mute" role="switch" aria-checked="false">
      <span class="icon">🔇</span>
    </button>
  </menu>
</div>

The length of the track, in this case, is specified by `--track-length` CSS variable, which must be set on the container:

```css
.--vertical-range-container {
  --track-length: 256px;
}
```

<br>

<h3 id="range-input-customization">Customization</h3>

Tweak [global CSS variables](#theming) for customizing range inputs. If you need further customization, you can use following CSS variables:

<div style="overflow-x: auto">
  <table>
    <caption>Range Input CSS Variables</caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--range-input<br>&emsp;-track-height</code></td>
        <td><code>4px</code></td>
        <td>Height of the track</td>
      </tr>
      <tr>
        <td><code>--range-input<br>&emsp;-thumb-width</code></td>
        <td><code>var(--button-height)</code></td>
        <td>Width of the thumb</td>
      </tr>
      <tr>
        <td><code>--range-input<br>&emsp;-thumb-height</code></td>
        <td><code>calc(<br>&emsp;var(--button-height)<br>&emsp; * 2 / 3)</code></td>
        <td>Height of the thumb</td>
      </tr>
      <tr>
        <td><code>--range-input<br>&emsp;-margin</code></td>
        <td><code>calc(<br>&emsp;var(--range-input<br>&emsp;&emsp;-thumb-height) +<br>&emsp; var(--spacing)) 0</code></td>
        <td>Margin of the range input</td>
      </tr>
      <tr>
        <td><code>--range-input<br>&emsp;-empty-track-inversion</code></td>
        <td><code>0.12</code></td>
        <td>How much to invert the empty track color</td>
      </tr>
    </tbody>
  </table>
</div>

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
