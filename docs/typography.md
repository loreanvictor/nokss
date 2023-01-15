<section>

# Typography

_nokss_ defaults to a native font stack for performance, available in `--font-family` CSS variable:

```css
:root {
  --font-family:
    -apple-system,
    blinkmacsystemfont,
    'Segoe UI',
    'Noto Sans',
    helvetica,
    arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
}
```

<br>

Font size is based off of `rem` unit to support browser's default font size:

```css
:root {
  --font-size: 1rem;
  --font-weight: 300;
  --line-height: calc(var(--font-size) * 1.5);
}
```

<br>

> In most cases you don't need to use these variables, as `rem` unit is itself relative
> to font size of root.

<br>

<div role="presentation" id="typopres">

<div class="flex"><small>2.986 rem</small><h1>Heading 1</h1></div>
<div class="flex"><small>2.488 rem</small><h2>Heading 2</h2></div>
<div class="flex"><small>2.074 rem</small><h3>Heading 3</h3></div>
<div class="flex"><small>1.728 rem</small><h4>Heading 4</h4></div>
<div class="flex"><small>1.44 rem</small><h5>Heading 5</h5></div>
<div class="flex"><small>1.2 rem</small><h6>Heading 6</h6></div>
<div class="flex">
  <small>1.0 rem</small>
  <div>
  But I must <b>explain</b> to you how <a>all</a> this mistaken idea of <i>denouncing</i> pleasure and <u>praising</u> pain was born and I will give you a complete <s>account</s> of the system, and expound the <mark>actual teachings of the great</mark> explorer of the truth, the <sub>master-builder</sub> of human <sup>happiness</sup>.
  </div>
</div>
<div class="flex">
  <small>0.833 rem</small>
  <p>
    <small>
    No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
    </small>
  </p>
</div>

</div>

<style>
#typopres .flex {
  display: flex;
  align-items: center;
}

#typopres .flex>small:first-child {
  width: 4rem;
  flex-shrink: 0;
  opacity: calc(max(var(--border-expression) * 4, 0.2));
  text-align: right;
  margin-right: 1em;
}

#typopres :is(h1, h2, h3, h4, h5, h6) {
  margin: calc(2 * var(--spacing)) 0;
}
</style>

</section>