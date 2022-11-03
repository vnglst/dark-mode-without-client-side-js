/** @jsx h */

import { h } from "./deps.ts";

type Props = {
  mode?: string;
};

export function App({ mode }: Props) {
  // only add class props if mode is defined
  const hasCustomMode = mode !== undefined;
  const modeClass = mode === "dark" ? "dark" : "light";
  const props = hasCustomMode ? { class: modeClass } : {};

  return (
    <html {...props}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <link rel="stylesheet" href="/style.css" />
        <title>Hello darkness mode</title>
      </head>
      <body>
        <main>
          <h1>Hello darkness mode!</h1>
          <form
            action="/toggle-to-dark"
            method="POST"
            class="toggle-form"
            id="light-form">
            <input type="submit" id="light-button" value="To Dark" />
          </form>
          <form
            action="/toggle-to-light"
            method="POST"
            class="toggle-form"
            id="dark-form">
            <input type="submit" id="dark-button" value="To Light" />
          </form>
        </main>
      </body>
      <script src="/script.js"></script>
    </html>
  );
}
