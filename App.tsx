/** @jsx h */

import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

type Props = {
  mode: string;
};

export function App({ mode }: Props) {
  return (
    <html class={mode}>
      <link rel="stylesheet" href="/style.css" />
      <head>
        <title>Hello from Deno</title>
      </head>
      <body>
        <main>
          <h1>Hello world!</h1>
          <form action="/toggle" method="POST" id="toggle-form">
            <label htmlFor="toggle" id="toggle-label">
              <input type="submit" value="" id="toggle" />
            </label>
          </form>
        </main>
      </body>
      <script src="/script.js" />
    </html>
  );
}
