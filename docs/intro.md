<section>

<br><br><br><br>

{% include 'banner.html' %}

<div align="center">
  <picture>
    <source srcset="./assets/logo-dark.svg" media="(prefers-color-scheme: dark)">
    <img alt="logo" src="./assets/logo-light.svg" height="64px">
  </picture>
  <br>
  <sub>Enough CSS to get started</sub>
</div>

<br><br>

<div align="right">

![zipped size](https://img.shields.io/github/size/loreanvictor/nokss/nokss.css.br?branch=gh-pages&color=black&label=%20&style=flat-square)

</div>

_nokss_ is a drop-in stylesheet that works out of the box. Instead of reyling on CSS classes, _nokss_ uses the semantics of HTML itself to figure out how to style various elements: a button is styled like a button, a link like a link, etc. This means you can use _nokss_ without needing to change your HTML at all.

_nokss_ is designed for prototyping, blogs, articles, small projects, etc. Basically any use case where semantic HTML is enough for distinguishing various elements. It can be further extended for more complex use cases, however that is not a top priority for this project.

Other features:

- Fully responsive.
- Supports dark mode out of the box.
- Customizable through CSS variables.
- Its pretty tiny.

Except a few specific elements, this document is styled with _nokss_ itself, and acts as a preview. You can also change the theme in [Theming](#theming) section to see how it would look with other themes.

</section>