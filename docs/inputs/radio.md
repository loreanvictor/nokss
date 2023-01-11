<section>

## Radio & Checkboxes

Radio inputs also pickup their styling from the theme:

```html
<input type="radio" name="sauce" id="mayo"/>
<label for="mayo">Mayo</label>
<br>
<input type="radio" name="sauce" id="ketchup"/>
<label for="ketchup">Ketchup</label>
```

<div role="presentation">
  <input type="radio" name="sauce" id="mayo"/>
  <label for="mayo">Mayo</label>
  <br>
  <input type="radio" name="sauce" id="ketchup"/>
  <label for="ketchup">Ketchup</label>
</div>

<br>

As do checkboxes:

```html
<input type="checkbox" id="step1"/>
<label for="step1">Step 1: Do these stuff</label>
<br>
<input type="checkbox" id="step2"/>
<label for="step2">Step 2: Do that stuff</label>
<br>
<input type="checkbox" id="step3" aria-invalid="true"/>
<label for="step3">Step3: Also you MUST accept this.</label>
<br>
<input type="checkbox" id="final" />
<label for="step3">Everything is done.</label>
```

<div role="presentation" id="checkbox-pres">
  <input type="checkbox" id="step1"/>
  <label for="step1">Step 1: Do these stuff</label>
  <br>
  <input type="checkbox" id="step2"/>
  <label for="step2">Step 2: Do that stuff</label>
  <br>
  <input type="checkbox" id="step3" aria-invalid="true"/>
  <label for="step3">Step3: Also you MUST accept this.</label>
  <br>
  <input type="checkbox" id="final" />
  <label for="step3">Everything is done.</label>
</div>

<script>
  const all = document.querySelector('#checkbox-pres input#final');
  const checked = [false, false, false]
  document.querySelectorAll('#checkbox-pres input:not(#final)').forEach((ch, index) => {
    ch.addEventListener('click', () => {
      checked[index] = ch.checked
      all.checked = checked.every(_ => _)
      all.indeterminate = checked.some(_ => _) && !all.checked
    })
  })
</script>

<br>

You can also use buttons and radio groups instead of radio inputs:

```html
<menu role="radiogroup">
  <button role="radio">Alliance</button>
  <button role="radio">Horde</button>
  <button role="radio">Panda</button>
</menu>
```

<div role="presentation">
  <menu role="radiogroup">
    <button role="radio">Alliance</button>
    <button role="radio">Horde</button>
    <button role="radio" aria-label="Panda">🐼</button>
  </menu>
</div>

<br>

> Note that the behavior needs to be added in when using radio groups:
>
> ```js
> document.querySelectorAll('[role="radiogroup"]').forEach(group => {
>   group.querySelectorAll('button, [role="radio"]').forEach(radio => {
>     radio.addEventListener('click', () => {
>       group.querySelectorAll('button, [role="radio"]').forEach(r => r.setAttribute('aria-checked', false))
>       radio.setAttribute('aria-checked', true)
>     })
>   })
> })
> ```

</section>