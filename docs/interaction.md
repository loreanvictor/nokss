<section>

# Interactions

The following CSS variables generally determine various interactive aspects of the design:

<div style="overflow-x: auto">
  <table>
    <caption>Interactions' CSS Variables</caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--interactable-size</code></td>
        <td><code>32px</code></td>
        <td>Size of interactable elements.</td>
      </tr>
      <tr>
        <td><code>--disabled-opacity</code></td>
        <td><code>0.35</code></td>
        <td>Opacity of disabled elements.</td>
      </tr>
      <tr>
        <td><code>--active-opacity</code></td>
        <td><code>0.85</code></td>
        <td>Opacity of active elements.</td>
      </tr>
      <tr>
        <td><code>--interactable-brightness</code></td>
        <td><code>0.96</code> <small>(light)</small><br><code>2.25</code> <small>(dark)</small></td>
        <td>Brightness of interactable elements.</td>
      </tr>
      <tr>
        <td><code>--hover-brightness</code></td>
        <td>
          <code>calc(1 - (1 - <br>&emsp;var(--interactable-brightness))<br>&emsp; * 1/10)</code> <small>(light)</small><br>
          <code>calc(<br>&emsp;var(--interactable-brightness)<br>&emsp; * 1.35)</code> <small>(dark)</small></td>
        <td>Brightness of interactable elements on hover.</td>
      </tr>
    </tbody>
  </table>
</div>

On touch devices, a larger `--interactable-size` is used:

```css
@media (hover: none) and (pointer: coarse) {
  :root {
    --interactable-size: 40px;
  }
}
```

</section>