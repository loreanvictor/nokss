<section>

## Input Status

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