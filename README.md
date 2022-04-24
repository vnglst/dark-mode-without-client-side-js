# Dark mode toggle without client side JS

## Usage

Install deno and run:

```bash
deno run --allow-net --allow-read --watch webserver.tsx
```

## Implementation

This is an experiment to see if we can get a dark mode toggle without client side JS. It uses a form with submit button to toggle dark mode if there is no JavaScript (using a POST request to `/toggle`). This requests sets a cookie to remember the user's preference.

When JavaScript is available the same request is made to `/toggle` (setting the cookie) but the default page refresh is prevented. Instead the DOM is updated, setting the class "dark" or "light" on the html element.

This works pretty well, but it's not perfect. When a user first visits the page and we're using the system mode the server has no way of knowing what the current system mode is. So when the user toggles the mode, the server will set the wrong mode half of the time.

In my first attempt to fix this. I've added image requests in my stylesheet. One for dark mode (using `@media (prefers-color-scheme: dark)`):

```css
@media (prefers-color-scheme: dark) {
  :root {
    background-image: url("/system-dark");
  }
}
```

And one for light mode (`url("system-light")`). These image requests didn't actually request images, but upon receiving those requests the server will set the cookie to the correct mode.

It works, but it does have quite a few disavantages though:

- every page no does two extra images requests
- when system dark mode changes during a session, the cookie could become out of sync
- it's hacky solution

## Improved solution: two forms
