<section>

## Radio & Checkboxes

Use `<input type="radio">` when users have to pick a choice:

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

Use `<input type="checkbox">` when users can independently select and deselect some chocies:

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
  <label for="final">Everything is done.</label>
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

Use `role="switch"` on an `<input type="checkbox" />` to get a switch-style checkbox:

```html
<label>
  <input type="checkbox" role="switch"/>
  <span>Enable Stuff</span>
</label>
```

<div role="presentation">
  <label>
    <input type="checkbox" role="switch"/>
    <span>Enable Stuff</span>
  </label>
</div>

<br>

Use `role="radiogroup"` instead of radio inputs for a different style:

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