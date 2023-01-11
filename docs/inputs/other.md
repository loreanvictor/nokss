<section>

## Other Input Types

Other input types are styled roughly similar to [text inputs](#text-input), and can similarly be used in toolbars as well:

```html
<menu role="toolbar">
  <select>
    <option>To Be</option>
    <option>Or not to be</option>
  </select>
  <input type="color" aria-label="background"/>
  <input type="color" value="#4223e9" aria-label="foreground"/>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <select>
      <option>To Be</option>
      <option>Or not to be</option>
    </select>
    <input type="color" aria-label="background"/>
    <input type="color" value="#4223e9" aria-label="foreground"/>
  </menu>
</div>

<br>

```html
<menu role="toolbar">
  <input type="date" value="2023-01-08" aria-label="event date"/>
  <input type="time" value="16:20" aria-label="event time"/>
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <input type="date" value="2023-01-08" aria-label="event date"/>
    <input type="time" value="16:20" aria-label="event time"/>
  </menu>
</div>

<br>


Color inputs can also be used in vertical toolbars:

```html
<menu role="toolbar" aria-orientation="vertical">
  <input type="color" value="#FF7B54" aria-label="primary color"/>
  <input type="color" value="#FFB26B" aria-label="secodnary color"/>
  <input type="color" value="#FFD56F" aria-label="tertiary color"/>
  <input type="color" value="#939B62" aria-label="accessory color"/>
  <button aria-label="pick" class="icon">⌮</button>
</menu>
```

<div role="presentation">
  <menu role="toolbar" aria-orientation="vertical">
    <input type="color" value="#FF7B54" aria-label="primary-color"/>
    <input type="color" value="#FFB26B" aria-label="secondary-color"/>
    <input type="color" value="#FFD56F" aria-label="tertiary color"/>
    <input type="color" value="#939B62" aria-label="accessory color"/>
    <button aria-label="pick" class="icon">⌮</button>
  </menu>
</div>

<br>

File inputs are also styled according to the theme:

```html
<input type="file" aria-label="profile picture"/>
```

<div role="presentation">
  <input type="file" aria-label="profile-picture"/>
</div>

<br>


</section>