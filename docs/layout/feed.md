<section>

## Feed & Cards

Use `<article>` elements in a container with the `feed` role to create cards:

```html
<section role="feed">
  <article>First thingy</article>
  <article>Second thingy</article>
  <article>Third thingy</article>
</section>
```

<div role="presentation">
  <section role="feed">
    <article>
      First thingy
    </article>
    <article>
      Second thingy
    </article>
    <article>
      Third thingy
    </article>
  </section>
</div>

<br>

Use images directly in a card to display them as card banner:

```html
<section role="feed">
  <article>
    <img src="https://picsum.photos/800/300" alt="random image"/>
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
</section>
```

<div role="presentation" class="card-show">
  <section role="feed">
    <article>
      <img src="https://fastly.picsum.photos/id/524/800/300.jpg?hmac=pwlxDFFOamysPl22ghj0pU3yyVtV8bwKdXwi-mzJuFw" loading="lazy" alt="random image"/>
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
  </section>
</div>

<br>

Use `<header>` to create a card header:

```html
<section role="feed">
  <article>
    <header>
      <h2>Card Title</h2>
    </header>
    <img src="https://picsum.photos/800/300" alt="random image"/>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <footer align="end">
      <div>
        <button>Learn More</button>
      </div>
    </footer>
  </article>
</section>
```

<div role="presentation" class="card-show">
  <section role="feed">
    <article>
      <header>
        <h2>Card Title</h2>
      </header>
      <img src="https://fastly.picsum.photos/id/348/800/300.jpg?hmac=s4Nq5BND1Ojl9ARJEmC9SbpLI4Rq9C8HwkjKuyL91xQ" loading="lazy" alt="random image"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer align="end">
        <div>
          <button>Learn More</button>
        </div>
      </footer>
    </article>
  </section>
</div>

<br>

Use `<address>` for attributing the card to some author:

```html
<section role="feed">
  <article>
    <header>
      <address>
        <img src="https://some.avatar" alt="random avatar"/>
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
</section>
```

<div role="presentation" class="card-show">
  <section role="feed">
    <article>
      <header>
        <address>
          <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80" loading="lazy" alt="random avatar"/>
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
  </section>
</div>

<br>

Note how in the above example, the `<footer>` is used, with a toolbar within it, to provide a set of actions for the card.
You can also just give the footer element the toolbar role:

```html
<section role="feed">
  <article role="comment">
    <header>
      <address>
        <img src="https://randomuser.me/api/portraits/women/95.jpg" loading="lazy" alt="random avatar"/>
        Jeanette Martin
      </address>
    </header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <footer role="toolbar">
      <button aria-label="like" >❤ 33k</button>
      <button aria-label="comment">💬 1.2k</button>
      <button aria-label="repost">🔁 1,024</button>
      <button aria-label="share">↥</button>
    </footer>
  </article>
</section>
```

<div role="presentation" class="card-show">
  <section role="feed">
    <article role="comment">
      <header>
        <address>
          <img src="https://randomuser.me/api/portraits/women/95.jpg" loading="lazy" alt="random avatar"/>
          Jeanette Martin
        </address>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer role="toolbar">
        <button aria-label="like" ><span class="icon">❤</span>&ensp;33k</button>
        <button aria-label="comment"><span class="icon">💬</span>&ensp;1.2k</button>
        <button aria-label="repost"><span class="icon">🔁</span>&ensp;1,024</button>
        <button aria-label="share" class="icon">↥</button>
      </footer>
    </article>
  </section>
</div>

<br>

Put a toolbar at the beginning of the card to provide top-side actions:

```html
<section role="feed">
  <article>
    <menu role="toolbar">
      <button aria-label="like" class="icon">❤</button>
      <button aria-label="comment" class="icon">💬</button>
      <button aria-label="share" class="icon">↥</button>
    </menu>
    <img src="https://picsum.photos/800/450" alt="random image"/>
    <address>
      <img src="https://some.avatar" alt="random avatar"/>
      Jane Smith
    </address>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

<div role="presentation" class="card-show">
  <section role="feed">
    <article>
      <menu role="toolbar">
        <button aria-label="like" class="icon">❤</button>
        <button aria-label="comment" class="icon">💬</button>
        <button aria-label="share" class="icon">↥</button>
      </menu>
      <img src="https://fastly.picsum.photos/id/719/800/450.jpg?hmac=rEMrdIK6xB0MCQADJXpyRS257-VsT9TrtGuJw54nwEE" loading="lazy" alt="random image"/>
      <address>
        <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" loading="lazy" alt="random avatar"/>
        Jane Smith
      </address>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </article>
  </section>
</div>

<br>

Alternatively, you can put the toolbar in the header:

```html
<section role="feed">
  <article>
    <header>
      <address>
        <img src="https://some.avatar" alt="random avatar"/>
        <div>
          Max Mustermann <br>
          <small>General Enthusiast</small>
        </div>
      </address>
      <menu role="toolbar">
        <details>
          <summary role="button" aria-label="more">⋮</summary>
          <div>
            <menu role="toolbar" aria-orientation="vertical">
              <button>Share</button>
              <button>Remove</button>
              <button>Report</button>
            </menu>
          </div>
        </details>
      </menu>
    </header>
    <img src="https://picsum.photos/800/400" alt="random image"/>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

<div role="presentation" class="card-show">
  <section role="feed">
    <article>
      <header>
        <address>
          <img src="https://randomuser.me/api/portraits/men/7.jpg" loading="lazy" alt="random avatar"/>
          <div>
            Max Mustermann <br>
            <small>General Enthusiast</small>
          </div>
        </address>
        <menu role="toolbar">
          <details>
            <summary role="button" aria-label="more" class="icon">⋮</summary>
            <div>
              <menu role="toolbar" aria-orientation="vertical">
                <button>Share</button>
                <button>Remove</button>
                <button>Report</button>
              </menu>
            </div>
          </details>
        </menu>
      </header>
      <img src="https://fastly.picsum.photos/id/703/800/400.jpg?hmac=rDXJTTGlmjwaWK0N7UrsD3x6ipl_lFyhCYwrEE2frN4" loading="lazy" alt="random image"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </article>
  </section>
</div>

<br>

Set `aria-orientation` attribute on the feed to indicate the direction of the feed:

```html
<section role="feed" aria-orientation="horizontal">
  <article>
      <img src="https://picsum.photos/400" alt="random image"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <footer>
        <button>Learn More</button>
      </footer>
  </article>
  <article>...</article>
  <article>...</article>
  <article>...</article>
</section>
```

<div role="presentation">
  <section role="feed" aria-orientation="horizontal">
    <article>
      <img src="https://fastly.picsum.photos/id/59/400/400.jpg?hmac=qvt2bAWzhpE9XUF0OT_lqcBpUBQEJG_8U3arHbyr3G8" loading="lazy" alt="random image"/>
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <footer>
        <button>Learn More</button>
      </footer>
    </article>
    <article>
      <img src="https://fastly.picsum.photos/id/813/400/400.jpg?hmac=3eUkOPA1X4a9JB_fNq27cSoZ_ii17tUciJnLjDvW7lA" loading="lazy" alt="random image"/>
      <h3>Eiusmod Tempor</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer>
        <button>Learn More</button>
      </footer>
    </article>
    <article>
      <img src="https://fastly.picsum.photos/id/305/400/400.jpg?hmac=SoMCZhTXX6izu9lebOx4ZpM61Wk9REorgeeZft6f6kg" loading="lazy" alt="random image"/>
      <h3>Consectetur</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer>
        <button>Learn More</button>
      </footer>
    </article>
    <article>
      <img src="https://fastly.picsum.photos/id/972/400/400.jpg?hmac=_Ib9c2W1lw435O5nTfCuUPu18kgLdIQxnKVxwAOYuFY" loading="lazy" alt="random image"/>
      <h3>Magna Aliqua</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer>
        <button>Learn More</button>
      </footer>
    </article>
  </section>
</div>

<br>

Use `aria-busy` attribute to indicate that the feed is loading:

```html
<section role="feed" aria-busy="true">
  ...
</section>
```

<div role="presentation">
  <section role="feed" id="feed-1">
    <article role="comment">
      <header>
        <address>
          <img src="https://randomuser.me/api/portraits/women/20.jpg" loading="lazy" alt="random avatar"/>
          <div>Erica Parker<br><small>W 6th St</small></div>
        </address>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </article>
    <article role="comment">
      <header>
        <address>
          <img src="https://randomuser.me/api/portraits/men/37.jpg" loading="lazy" alt="random avatar"/>
          <div>Kelly Davis<br><small>Belt Line Rd</small></div>
        </address>
      </header>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco ...
      </p>
    </article>
    <article  role="comment">
      <header>
        <address>
          <img src="https://randomuser.me/api/portraits/men/66.jpg" loading="lazy" alt="random avatar"/>
          <div>Aaron Lambert<br><small>Groveland Terrace</small></div>
        </address>
      </header>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </article>
  </section>
  <br>
  <div align="end">
    <button id="load-more">Load More</button>
  </div>
</div>

<script defer>
  const btn = document.querySelector('#load-more')
  const feed = document.querySelector('#feed-1')
  btn.addEventListener('click', () => {
    feed.setAttribute('aria-busy', true)
    btn.setAttribute('disabled', true)
    btn.textContent = 'Loading...'
    setTimeout(() => {
      feed.insertBefore(feed.querySelector('article:last-child'), feed.querySelector('article:first-child'))
      feed.removeAttribute('aria-busy')
      btn.removeAttribute('disabled')
      btn.textContent = 'Load More'
    }, 2000)
  })
</script>

<br>

<h3 id="feed-customization">Customization</h3>

Tweak [global CSS variables](#theming) for customizing modals. If you need further customization, you can use following CSS variables:

<div style="overflow-x: auto">
  <table>
    <caption>
      Feed CSS variables
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
        <td><code>--card-shadow</code></td>
        <td>
          <code>0 1px 3px 0 rgba(0 0 0 / 10%)</code> <small>(light)</small><br>
          <code>0 2px 6px 0 rgba(0 0 0 / 50%)</code> <small>(dark)</small>
        </td>
        <td>Shadow of a card.</td>
      </tr>
      <tr>
        <td><code>--card-brightness</code></td>
        <td>
          <code>1</code> <small>(light)</small><br>
          <code>calc(1 - (1 -<br>&emsp;var(--interactable-brightness)<br>) * 0.5)</code> <small>(dark)</small>
        </td>
        <td><p>Brightness card's background (relative to background).</p></td>
      </tr>
      <tr>
        <td><code>--raised-card<br>&emsp;-transform</code></td>
        <td><code>translateY(-2px)</code></td>
        <td>Transformation of a raised card.</td>
      </tr>
      <tr>
        <td><code>--raised-card<br>&emsp;-shadow</code></td>
        <td>
          <code>0 3px 9px 0 rgba(0 0 0 / 15%)</code> <small>(light)</small><br>
          <code>0 6px 18px 0 rgba(0 0 0 / 55%)</code> <small>(dark)</small>
        </td>
        <td>Shadow of a raised card.</td>
      </tr>
      <tr>
        <td><code>--raised-card<br>&emsp;-brightness</code></td>
        <td>
          <code>calc(1 - (1 -<br>&emsp;var(--interactable-brightness)<br>) * 0.25)</code> <small>(light)</small><br>
          <code>calc(1 - (1 -<br>&emsp;var(--interactable-brightness)<br>) * 0.65)</code> <small>(dark)</small>
        </td>
        <td><p>Brightness of a raised card's background (relative to background).</p></td>
      </tr>
      <tr>
        <td><code>--horizontal-feed<br>&emsp;-card-width</code></td>
        <td><code>256px</code></td>
        <td>Width of a card in horizontal feed.</td>
      </tr>
    </tbody>
  </table>
</div>

</section>