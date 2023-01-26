<section>

# Feed & Cards

Use `<article>` elements in a container with the `feed` role to create cards:

```html
<div role="feed">
  <article>First thingy</article>
  <article>Second thingy</article>
  <article>Third thingy</article>
</div>
```

<div role="presentation">
  <div role="feed">
    <article>
      First thingy
    </article>
    <article>
      Second thingy
    </article>
    <article>
      Third thingy
    </article>
  </div>
</div>

<br>

Use images directly in a card to display them as card banner:

```html
<div role="feed">
  <article>
    <img src="https://picsum.photos/800/300" />
    <h2>Card Title</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <footer align="end">
      <div>
        <button>Learn More</button>
      </div>
    </footer>
  </article>
</div>
```

<div role="presentation" style="padding: var(--spacing) 10vw">
  <div role="feed">
    <article>
      <img src="https://fastly.picsum.photos/id/524/800/300.jpg?hmac=pwlxDFFOamysPl22ghj0pU3yyVtV8bwKdXwi-mzJuFw" />
      <h2>Card Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <footer align="end">
        <div>
          <button>Learn More</button>
        </div>
      </footer>
    </article>
  </div>
</div>

<br>

Use `<header>` to create a card header:

```html
<div role="feed">
  <article>
    <header>
      <h2>Card Title</h2>
    </header>
    <img src="https://picsum.photos/800/300" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <footer align="end">
      <div>
        <button>Learn More</button>
      </div>
    </footer>
  </article>
</div>
```

<div role="presentation" style="padding: var(--spacing) 10vw">
  <div role="feed">
    <article>
      <header>
        <h2>Card Title</h2>
      </header>
      <img src="https://fastly.picsum.photos/id/348/800/300.jpg?hmac=s4Nq5BND1Ojl9ARJEmC9SbpLI4Rq9C8HwkjKuyL91xQ" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer align="end">
        <div>
          <button>Learn More</button>
        </div>
      </footer>
    </article>
  </div>
</div>

<br>

Use `<address>` for attributing the card to some author:

```html
<div role="feed">
  <article>
    <header>
      <address>
        <img src="https://some.avatar" />
        <div>
          John Doe<br>
          <small>Writes about stuff</small>
        </div>
      </address>
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <footer>
      <div role="toolbar" align="end">
        <button aria-label="like">❤</button>
        <button aria-label="comment">💬</button>
        <button aria-label="share">↥</button>
      </div>
    </footer>
  </article>
</div>
```

<div role="presentation" style="padding: var(--spacing) 10vw">
  <div role="feed">
    <article>
      <header>
        <address>
          <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80" />
          <div>
            John Doe<br>
            <small>Writes about stuff</small>
          </div>
        </address>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer>
        <div role="toolbar" align="end">
          <button aria-label="like" class="icon">❤</button>
          <button aria-label="comment" class="icon">💬</button>
          <button aria-label="share" class="icon">↥</button>
        </div>
      </footer>
    </article>
  </div>
</div>

<br>

Put a toolbar at the beginning of the card to provide top-side actions:

```html
<div role="feed">
  <article>
    <menu role="toolbar">
      <button aria-label="like" class="icon">❤</button>
      <button aria-label="comment" class="icon">💬</button>
      <button aria-label="share" class="icon">↥</button>
    </menu>
    <img src="https://picsum.photos/800/450" />
    <address>
      <img src="https://some.avatar" />
      Jane Smith
    </address>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</div>
```

<div role="presentation" style="padding: var(--spacing) 10vw">
  <div role="feed">
    <article>
      <menu role="toolbar">
        <button aria-label="like" class="icon">❤</button>
        <button aria-label="comment" class="icon">💬</button>
        <button aria-label="share" class="icon">↥</button>
      </menu>
      <img src="https://fastly.picsum.photos/id/719/800/450.jpg?hmac=rEMrdIK6xB0MCQADJXpyRS257-VsT9TrtGuJw54nwEE" />
      <address>
        <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
        Jane Smith
      </address>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </article>
  </div>
</div>

<br>

Alternatively, you can put the toolbar in the header:

```html
<div role="feed">
  <article>
    <header>
      <address>
        <img src="https://some.avatar" />
        <div>
          Max Mustermann <br>
          <small>General Enthusiast</small>
        </div>
      </address>
      <menu role="toolbar">
        <button aria-label="report">🏳</button>
      </menu>
    </header>
    <img src="https://picsum.photos/800/400" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</div>
```

<div role="presentation" style="padding: var(--spacing) 10vw">
  <div role="feed">
    <article>
      <header>
        <address>
          <img src="https://randomuser.me/api/portraits/men/7.jpg" />
          <div>
            Max Mustermann <br>
            <small>General Enthusiast</small>
          </div>
        </address>
        <menu role="toolbar">
          <button aria-label="report" class="icon">🏳</button>
        </menu>
      </header>
      <img src="https://fastly.picsum.photos/id/703/800/400.jpg?hmac=rDXJTTGlmjwaWK0N7UrsD3x6ipl_lFyhCYwrEE2frN4" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </article>
  </div>
</div>

<br>

Set `aria-orientation` attribute on the feed to indicate the direction of the feed:

```html
<div role="feed" aria-orientation="horizontal">
  <article>
      <img src="https://picsum.photos/400" />
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <footer>
        <button>Learn More</button>
      </footer>
  </article>
  <article>...</article>
  <article>...</article>
  <article>...</article>
</div>
```

<div role="presentation">
  <div role="feed" aria-orientation="horizontal">
    <article>
      <img src="https://fastly.picsum.photos/id/59/400/400.jpg?hmac=qvt2bAWzhpE9XUF0OT_lqcBpUBQEJG_8U3arHbyr3G8" />
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <footer>
        <button>Learn More</button>
      </footer>
    </article>
    <article>
      <img src="https://fastly.picsum.photos/id/813/400/400.jpg?hmac=3eUkOPA1X4a9JB_fNq27cSoZ_ii17tUciJnLjDvW7lA" />
      <h3>Eiusmod Tempor</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer>
        <button>Learn More</button>
      </footer>
    </article>
    <article>
      <img src="https://fastly.picsum.photos/id/305/400/400.jpg?hmac=SoMCZhTXX6izu9lebOx4ZpM61Wk9REorgeeZft6f6kg" />
      <h3>Consectetur</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer>
        <button>Learn More</button>
      </footer>
    </article>
    <article>
      <img src="https://fastly.picsum.photos/id/972/400/400.jpg?hmac=_Ib9c2W1lw435O5nTfCuUPu18kgLdIQxnKVxwAOYuFY" />
      <h3>Magna Aliqua</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer>
        <button>Learn More</button>
      </footer>
    </article>
  </div>
</div>

</section>