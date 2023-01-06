<br><br>

<div align="center">

<img src="logo-dark.svg#gh-dark-mode-only" height="64px"/>
<img src="logo-light.svg#gh-light-mode-only" height="64px"/>

<sub>Enough CSS to get started</sub>

<br>

</div>

<div align="right">

![zipped size](https://img.shields.io/github/size/loreanvictor/nokss/nokss.css.br?branch=gh-pages&color=black&label=%20&style=flat-square)
![npm](https://img.shields.io/npm/v/nokss?label=%20&style=flat-square)

</div>

**nokss** is a drop-in stylesheet that works out of the box. Instead of relying on CSS classes, **nokss** uses the semantics of HTML itself to figure out how to style various elements: a button is styled like a button, a link like a link, etc. This means you can use **nokss** without needing to change your HTML at all.

To use **nokss**, simply include this line in your CSS:

```css
@import 'https://unpkg.com/nokss/dist/nokss.css';
```

And thats it! Write your HTML and **nokss** takes care of styling. The more semantic your HTML is, i.e. the more you use elements such as `<button>`, `<menu>`, `<aside>`, instead of just using `<div>`s everywhere, and the more you assign correct ARIA roles and attributes to them, the more **nokss** can do for you.

<br>

---

> 👉 [Read the docs](https://loreanvictor.github.io/nokss/) for more installation options and usage info.

---

<br>

# Contribution

You need [node](https://nodejs.org/en/), [NPM](https://www.npmjs.com) to start and [git](https://git-scm.com) to start.

```bash
# clone the code
git clone git@github.com:loreanvictor/minicomp.git
```
```bash
# install stuff
npm i
```

Make sure all checks are successful on your PRs. This includes all successful builds, and abiding all [the linting rules](https://github.com/loreanvictor/nokss/blob/main/.stylelintrc.json). The code is written in CSS, using [PostCSS](https://postcss.org) for bundling, vendor prefixing, minification, etc (see [this](https://github.com/loreanvictor/nokss/blob/main/postcss.config.js) for a comprehensive list of plugins), and [Stylelint](https://stylelint.io) for linting. Subsequently, an IDE integration for Stylelint would make your life much easier (for example, [VSCode](https://code.visualstudio.com) has [this nice Stylelint plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)), but you could also use the following commands:


```bash
# run the linter
npm run lint
```
```bash
# build the CSS package
npm run build:package
```
```bash
# build the docs
npm run build:docs
```
```bash
# run linter and build everything
npm test
```

You can preview the effects of your modifications either in the docs, or in the sample playground located in `/sample` folder. You can run these via the following commands:

```bash
# preview the docs
npm run docs
```
```bash
# preview the playground
npm run sample
```

<br><br>
