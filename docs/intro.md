<section id="intro">

<style>
  section#intro {
    display: flex;
    flex-direction: column;
    height: 85vh;
    justify-content: center;
  }
</style>
<script>
  if (window.innerWidth > 1024) {
    let initial = true
    const listener = () => {
      if (scrollY > window.innerHeight * 0.85) {
        if (initial) {
          initial = false
          document.querySelector('body>aside:first-of-type').setAttribute('aria-hidden', false)
          document.querySelector('body>footer [role="switch"]').setAttribute('aria-checked', false)
          document.removeEventListener('scroll', listener)
        }
      }
    }

    document.addEventListener('scroll', listener)
  }
</script>

<div>

  <div align="center" style="position: relative">
    <picture>
      <source srcset="./assets/logo-dark.svg" media="(prefers-color-scheme: dark)">
      <img alt="logo" src="./assets/logo-light.svg" height="64px">
    </picture>
    <br>
    <sub>Enough CSS to get started</sub>
  </div>

  <br>

  ```css
  /** in your CSS **/
  @import 'https://unpkg.com/nokss';
  ```

  <div align="right">

  ![zipped size](https://img.shields.io/github/size/loreanvictor/nokss/nokss.css.br?branch=gh-pages&color=black&label=%20&style=flat-square)

  </div>

</div>

</section>

<section>

_nokss_ is a drop-in stylesheet that works out of the box. No need to use CSS classes: just write plain, semantic HTML, and _nokss_ will style it for you (as much as it can). _nokss_ is designed for prototyping, blogs, articles, small projects, and as a starting point for more invloved applications.

- Its fully responsive.
- Supports dark mode out of the box.
- Extensive theming and customization via CSS variables.

Except a few specific elements, this document is styled with _nokss_ itself, and acts as a preview. You can also change the theme in [Theming](#theming) section to see how it would look with other themes.

</section>