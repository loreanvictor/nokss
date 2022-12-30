<br><br>

<div align="center">

<img src="logo-dark.svg#gh-dark-mode-only" height="64px"/>
<img src="logo-light.svg#gh-light-mode-only" height="64px"/>

<sub>Enough CSS to get started</sub>

<br>

</div>

<div align="right">

![GitHub file size in bytes on a specified ref (branch/commit/tag)](https://img.shields.io/github/size/loreanvictor/nokss/nokss.css.gz?branch=gh-pages&color=black&label=%20&style=flat-square)
![npm](https://img.shields.io/npm/v/nokss?label=%20&style=flat-square)

</div>

**nokss** is a drop-in stylesheet that works out of the box: no need for CSS classes or special attributes. Instead, nokss relies on semantics of HTML itself to figure out how to style various elements: a button is styled like a button, a link like a link, etc.

**nokss** is designed for prototyping, blogs, articles, small projects, etc. Basically any use case where semantic HTML is enough for distinguishing various elements. It can be further extended for more complex use cases, however that is not a top priority for this project.

To use **nokss**, simply include this line in your CSS:

```css
@import 'https://unpkg.com/nokss/dist/nokss.css';
```

And thats it! You don't need to use any classes or special attributes. **nokss** determines the styling for various elements based on the semantics of HTML itself, using HTML tags, ARIA roles, etc. This also means the [more semantic your HTML is](https://web.dev/learn/html/semantic-html/), the more you'll get out of **nokss**.

For other installation options, and more details on how to use **nokss**, [read the docs](https://loreanvictor.github.io/nokss/).

<br><br>
