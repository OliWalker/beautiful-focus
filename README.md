# Beautiful Focus

## Accessability & Beauty

A simple script to go from an ugly focus ring to a focus that your users are going to want to use.

Don’t let designers know it was this easy...

## Paste this into the head of the document

```
<script src=”https://beautifulfocus.io/lib/beautiful-focus.js” />
```

## Features

- Gorgeous focus ring
- Only shows Focus whilst navigating with the keyboard
- Automatically hides when using a mouse
- Fully customisable

## Why beautiful focus

Accessability should be a priority for every web-designer and developer these days. The web was built as an all-inclusive world we can all benefit from.

> “The power of the Web is in its universality.  
> Access by everyone regardless of disability is an essential aspect.”
> <cite>Tim Berners Lee</cite>

However we have so much to do! So many things to build and so many features to push. It is often an overthought or a last minute job to try to “Add Accessability” to a website.

Designers hate that blue outline that chrome gives when you click a button...

You’ve done it before right? used the old

```
&:focus {
    outline: none;
}
```

Well not anymore, stick Beautiful-Focus into your website, sit back and relax knowing that all users will get a great experience here.

## Usage

Below details some useful information when using the Beautiful Focus lib.

## Over-ride the styles

Simply style using the css id selector:

```
#__beautiful-focus {
 /* Your styles go here */
}
```

## Clearing the focus

Sometimes you will want to manually clear the focus ring. To do so simply dispatch a custom window event like so:

```
const event = new Event('clearFocus');
window.dispatchEvent(event);
```

## Single Page Apps

Single Page Apps will need to inform Beautiful-Focus when the page has changed so it knows to clear itself up.

To do this we need to dispatch the above mention clearFocus event when the page changes.

## Contributing

Beautiful Focus is a young project with a long way to go!

We would love you to help out, either by submitting Pr's to help with docs or the library, or just to give feedback on how we could improve!

## Next steps

- Add more info to docs.
- Add code snippets for SPA's clearing focus on route change
- many many more...
