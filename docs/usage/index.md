# Usage

**nokss** works out of the box and styles elements based on their semantics rather than classes or attributes. You don't
need to use any classes (like `.btn` or `.container`) for styling your HTML. Instead, **nokss** relies on the semantics of HTML
elements to determine how to style them:

- [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) mainly determine how an element should be styled.
- [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) can be used to style elements with a different tag, or elements lacking a proper HTML tag:
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

<hr class="page-break" />

{% markdown "usage/widgets/buttons.md" %}