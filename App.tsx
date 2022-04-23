/** @jsx h */

import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

type Props = {
  mode?: string;
};

export function App({ mode }: Props) {
  return (
    <html class={mode ? (mode === "dark" ? "dark" : "light") : ""}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <title>Hello darkness mode</title>
      </head>
      <body>
        <main>
          <h1>Hello darkness mode!</h1>
          <form action="/toggle" method="POST" id="toggle-form">
            <label htmlFor="toggle" id="toggle-label">
              <input type="submit" value="" id="toggle" />
            </label>
          </form>
        </main>
      </body>
      <script src="/script.js"></script>
    </html>
  );
}
