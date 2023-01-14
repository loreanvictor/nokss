<section>

## Input Utilities

_nokss_ provides styling for following form utilities as well:

<br>

### Field Sets

Use field sets to group some form controls together:

```html
<fieldset>
  <legend>Login</legend>
  <input type="email" placeholder="Email address" />
  <input type="password" placeholder="Password" />
  <menu role="group" align="end">
    <button>Cancel</button>
    <button>Login</button>
  </menu>
</fieldset>
```

<div role="presentation">
  <fieldset>
    <legend>Login</legend>
    <input type="email" placeholder="Email address" />
    <input type="password" placeholder="Password" />
    <menu role="group" align="end">
      <button>Cancel</button>
      <button>Login</button>
    </menu>
  </fieldset>
</div>

<br>

### Labels

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

<br>

### Status Messages

Use alert or status roles, or [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions),
to notify the user about the status of the input (or give them some hints on how to complete it properly):

```html
<textarea placeholder="Type something ..." maxlength="50" minlength="10"></textarea>
<div align="end" role="status">0/50</div>
```

<div role="presentation" id="stpres-1">
  <textarea placeholder="Type something ..." maxlength="50" minlength="10"></textarea>
  <div align="end" role="status">0/50</div>
</div>

<script>
  const stpres = document.getElementById('stpres-1')
  const textarea = stpres.querySelector('textarea')
  const status = stpres.querySelector('[role="status"]')
  textarea.addEventListener('input', () => {
    status.textContent = textarea.value.length + '/' + textarea.maxLength;
  })
</script>

> You need to add the behavior separately with JavaScript:
> ```js
> textarea.addEventListener('input', () => {
>   status.textContent = textarea.value.length + '/' + textarea.maxLength;
> })
> ```

<br>

Alerts (`role="alert"`), or assertive ARIA live regions (`aria-live="assertive"`) are only displayed when the
input is not focused and is invalid:

<div role="presentation">
  <label>Using alert:</label>
  <input type="email" placeholder="Enter an email address" value="invalid@email."/>
  <span role="alert">Enter a valid email address.</span>
  <hr />
  <label>Using status:</label>
  <input type="email" placeholder="Enter an email address" value="invalid@email."/>
  <span role="status">Enter a valid email address.</span>
  <br>
</div>

<br>

You can also use status messages within labels:

<div role="presentation">
  <label>
    Email address:
    <input type="email" placeholder="Enter an email address" />
    <span role="status">Enter a valid email address.</span>
  </label>
</div>

</section>