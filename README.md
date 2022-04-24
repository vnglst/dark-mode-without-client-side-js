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

## Using Two forms

To fix this we'll be using two forms. In light mode we only show the form that toggles to dark mode using the endpoint `/toggle-to-dark`. In dark mode we only show the form for switching to light mode using the endpoint `/toggle-to-light`.

When JavaScript is enabled the same logic is applied but then no page refresh is required. We just update the class of the html element to the respective light or dark mode.
