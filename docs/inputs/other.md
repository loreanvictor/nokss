<section>

# Other Input Types

Other input types are styled roughly similar to [text inputs](#text-input), and can similarly be used in toolbars as well:

```html
<menu role="toolbar">
  <select>
    <option>To Be</option>
    <option>Or not to be</option>
  </select>
  <input type="color" />
  <input type="color" value="#4223e9" />
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <select>
      <option>To Be</option>
      <option>Or not to be</option>
    </select>
    <input type="color" />
    <input type="color" value="#4223e9" />
  </menu>
</div>

<br>

```html
<menu role="toolbar">
  <input type="date" />
  <input type="time" />
</menu>
```

<div role="presentation">
  <menu role="toolbar">
    <input type="date" />
    <input type="time" />
  </menu>
</div>

<br>


Color inputs can also be used in vertical toolbars:

```html
<menu role="toolbar" aria-orientation="vertical">
  <input type="color" value="#FF7B54" />
  <input type="color" value="#FFB26B" />
  <input type="color" value="#FFD56F" />
  <input type="color" value="#939B62" />
  <button aria-label="pick" class="icon">⌮</button>
</menu>
```

<div role="presentation">
  <menu role="toolbar" aria-orientation="vertical">
    <input type="color" value="#FF7B54" />
    <input type="color" value="#FFB26B" />
    <input type="color" value="#FFD56F" />
    <input type="color" value="#939B62" />
    <button aria-label="pick" class="icon">⌮</button>
  </menu>
</div>

<br>

File inputs are also styled according to the theme:

```html
<input type="file" />
```

<div role="presentation">
  <input type="file" />
</div>

<br>


</section>