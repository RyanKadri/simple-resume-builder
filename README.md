# Simple Resume Builder

This is a simple templated builder for my resume.
It is data-driven and renderable in node to a single static HTML page. 
It does not use any frameworks or ui libraries but it does use a whole lot of webpack plugins.

See my resume at <https://resume.rk0.xyz>

## Goals

I originally decided to create my resume completely in plain HTML and CSS but my code was not as dry as I
wanted it to be. It also would be hard to change and reuse later. At the same time, it felt weird to need a
framework to display my resume. My goal was to make a sane, DRY, SSR-friendly page without the need for third-party code at runtime

I like the modularity and composability you can get with JSX, so I decided to use that. To avoid the need for React
or Preact, I wrote a very lightweight (and not production-ready) JSX renderer to display my page. I have preact as a
dev-dependency because I wanted to steal its typings for JSX.IntrinsicElements. It is not used at runtime.

My resume can be built as a dynamic page with `npm run start:web` or rendered in node with `npm run build:static`
(the rendered files go to `dist/` in the second case)

## TODOs

* Be more friendly to different life experiences (Unusual Education? Volunteering work?)
* Allow for theming
* Mayyybe hook up to a form on another page for easier data-entry
* More resume styles from the same-ish data
* Service worker for offline use