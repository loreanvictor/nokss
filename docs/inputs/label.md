
<section>

## Labels

Use inputs within labels to bind them together:

```html
<label>
  Name: <input type="text" />
</label>
<label>
  Phone Number: <input type="tel" />
</label>
<label>
  Bio:<br> <textarea></textarea>
</label>
<label>
  Account privacy:
  <menu role="radiogroup">
    <button role="radio">Public</button>
    <button role="radio">Private</button>
  </menu>
</label>
```

<div role="presentation">
  <label>
    Name:
    <input type="text" />
  </label>
  <label>
    Phone Number:
    <input type="tel" />
  </label>
  <label>
    Bio:<br>
    <textarea></textarea>
  </label>
  <label>
    Account privacy:
    <menu role="radiogroup">
      <button role="radio">Public</button>
      <button role="radio">Private</button>
    </menu>
  </label>
</div>

<br>

You can also disassociate labels and inputs:

```html
<label>Name:</label>
<input type="text" placeholder="First name and last name ..." />
<label>Phone Number:</label>
<input type="tel" placeholder="+xx-xxx-xxxxxxx" />
```

<div role="presentation">
  <label>Name:</label>
  <input type="text" placeholder="First name and last name ..." />
  <label>Phone Number:</label>
  <input type="tel" placeholder="+xx-xxx-xxxxxxx" pattern="\+49\d+"/>
</div>

<br>

> For accessibility, you should always link labels and inputs, either by grouping them in the same label element,
> by linking them via `for` and `id` attributes, or by using the `aria-labelledby` attribute.

<br>

For checkboxes and radio inputs, make sure you wrap the content of the label inside another element (such as a `<span/>`):

```html
<label>
  <input type="checkbox" />
  <span>Remember me</span>
</label>
```

<div role="presentation">
  <label>
    <input type="checkbox" />
    <span>Remember me</span>
  </label>
</div>

</section>