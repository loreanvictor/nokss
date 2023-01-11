<section>

# Usage

To use _nokss_, just [load the stylesheet](#installation). _nokss_ styles elements based on their semantics, so you don't have to worry about class names:

- [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) mainly determine how an element should be styled.
- [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) are used to identify components without a semantic HTML tag, or for cases where elements are commonly used in a role different than their tag:
  ```html
  <a role="button"> ... </a>
  ```
  ☝️ This anchor is styled like a button.
  ```html
  <menu role="toolbar"> ... </menu>
  ```
  ☝️ This menu is styled like a toolbar.

- HTML and [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) are used for further control over style of an element:
  ```html
  <menu role="toolbar" aria-orientation="vertical"> ... </menu>
  ```
  ☝️ This will result in a vertical toolbar.

<br>

You can find a comprehensive list of elements and components supported by _nokss_, how their usage looks like, and their respective customization options, in the following sections:

- [Controls](#controls)
- [Inputs](#inputs)
- [Layout](#layout)
- [Content](#content)

</section>