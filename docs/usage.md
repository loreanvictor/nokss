<section>

# Usage

Just [load the stylesheet](#installation). _nokss_ styles elements based on their semantics, so you don't have to worry about class names.
The more semantic and accessible your markup is, the more _nokss_ will be able to do for you.

Semantics are mainly dictated by [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) and [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles), with  HTML and [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) providing further context. Structural conventions are used for context about more complex semantics:


<br>

```html
<a role="button"> ... </a>
```
☝️ This anchor is styled like a button.

<br>

```html
<menu role="toolbar" aria-orientation="vertical">...</menu>
```
☝️ This menu is styled as a vertical toolbar.

<br>


```html
<input type="email" />
<span role="alert">Please enter a valid email</span>
```
☝️ The `<span/>` is treated as the error message for the input.

<br>

```html
<button role="switch">
  <span>Off</span>
  <span>On</span>
</button>
```
☝️ The first `<span/>` is shown in **off** state, the second in **on** state.

<br>

You can find a comprehensive list of elements and components supported by _nokss_, how their usage looks like, and their respective customization options, in the following sections:

- [Controls](#controls)
- [Inputs](#inputs)
- [Layout](#layout)
- [Content](#content)

</section>