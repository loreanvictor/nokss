<section>

# Main Content & Sections

Wrap your main content in `<main>` tag:

```html
<main>
  <h1>My Main Content</h1>
  <p>My main content goes here.</p>
</main>
```

Main content is centered with a relative width by default, which falls back to full width on smaller screens, with a small margin.
You can configure these via the following CSS variables:

<div style="overflow-x: auto">
  <table>
    <caption>
      Main Content CSS Variables
    </caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--main-content<br>&emsp;-max-width</code></td>
        <td><code>60vw</code></td>
        <td>Width of main content</td>
      </tr>
      <tr>
        <td></td>
        <td><code>768px</code></td>
        <td><i>Screens smaller than <code>768px</code></i></td>
      </tr>
      <tr>
        <td><code>--main-content<br>&emsp;-margin</code></td>
        <td><code>calc(var(--spacing) * 4) auto</code></td>
        <td>Margin of main content</td>
      </tr>
      <tr>
        <td></td>
        <td><code>calc(var(--spacing) * 2)</code></td>
        <td><i>Screens smaller than <code>768px</code></i></td>
      </tr>
    </tbody>
  </table>
</div>

<br>

Sections have additional vertical spacing between them. Additionally, if a section starts with a linkable header,
additional offset will be created so that when loading the page with a hash in the URL, the header has enough spacing from
the top of the screen (this is set to half the distance to previous section).

<div style="overflow-x: auto">
  <table>
    <caption>
      Section CSS Variables
    </caption>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--section<br>&emsp;-spacing</code></td>
        <td><code>calc(var(--spacing) * 16)</code></td>
        <td>Spacing between sections</td>
      </tr>
      <tr>
        <td><code>--section<br>&emsp;-header-offset</code></td>
        <td><code>calc(var(--section-spacing) / 2)</code></td>
        <td>Offset of section header</td>
      </tr>
    </tbody>
  </table>
</div>

</section>