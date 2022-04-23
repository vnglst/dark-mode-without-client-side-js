/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import {
  getCookies,
  setCookie,
} from "https://deno.land/std@0.136.0/http/cookie.ts";
import { App } from "./App.tsx";

serve(handler);

console.log("Listening on http://localhost:8000");

async function handler(req: Request) {
  const { pathname } = new URL(req.url);
  const mode = getCookies(req.headers).mode;
  const system = getCookies(req.headers).system;

  if (pathname.startsWith("/system-dark")) {
    const headers = new Headers();
    setCookie(headers, { name: "system", value: "dark" });
    return new Response("", { headers, status: 200 });
  }

  if (pathname.startsWith("/system-light")) {
    const headers = new Headers();
    setCookie(headers, { name: "system", value: "light" });
    return new Response("", { headers, status: 200 });
  }

  if (pathname.startsWith("/toggle") && req.method === "POST") {
    const current = mode || system;
    const nextMode = current === "dark" ? "light" : "dark";
    const redirectUrl = new URL(req.url + "/..").href;
    const headers = new Headers({ location: redirectUrl });

    setCookie(headers, {
      name: "mode",
      value: nextMode,
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });

    return new Response(null, { headers, status: 302 });
  }

  if (pathname.startsWith("/script.js")) {
    const file = await Deno.readFile("./script.js");
    return new Response(file, {
      headers: { "Content-Type": "application/javascript" },
    });
  }

  if (pathname.startsWith("/style.css")) {
    const file = await Deno.readFile("./style.css");
    return new Response(file, { headers: { "Content-Type": "text/css" } });
  }

  const html = renderSSR(<App mode={mode} />);
  return new Response(html, { headers: { "Content-Type": "text/html" } });
}
