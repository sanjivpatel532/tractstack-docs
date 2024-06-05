---
title: Custom code hooks
description: Customize your Tract Stack
---

Tract Stack is a content-first experience and intended to require no-code. However, there are scenarios where you may need code! A pricing table or custom hero section may warrant a special touch.

A story fragment (e.g. web page in your Tract Stack) may include a custom component.

## Custom set-up

This will require server access.

### Wire up a new code hook

Your Tract Stack [project](/basics/structure/) has a `~/src/tractstack-frontend/src/custom` folder.

- edit the `codehooks.tsx` file

```js
//import Branding from './Branding';

const CodeHook = ({ target }: { target: string }) => {
  switch (target) {
    //case `Branding`:
    //  return <Branding />

    default:
      console.log(`missed on`, target)
      return <div />
  }
}

export default CodeHook;
```

Define your codehooks here.

### Include this code hook on your page

Full disclosure: the current story keep prototype written in Gatsby doesn't have an easy method to add the codehook; this'll be corrected in the port to astro (soon coming).

But it's fully supported in spite of the UX gap. See the Tract Stack [pricing](https://tractstack.com#pricing?utm_source=docs&utm_medium=www&utm_campaign=starlight) for an example.
