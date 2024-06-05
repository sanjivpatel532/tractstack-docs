---
title: Action LISP for custom events
description: Customize your user journey
---

Tract Stack has an internal [LISP](<https://en.wikipedia.org/wiki/Lisp_(programming_language)>) built-in for action scripting!

The current command-set is limited.

## goto

Usage: `(goto (parameterOne parameterTwo parameterThree))`

### goto home

Usage: `(goto (home))`

On click, this will load the `/` homepage

### goto concierge

Usage: `(goto (concierge target))`

On click, this will goto the `/concierge/target` page. Likely target values are `profile` and `graph`

### goto context

Usage: `(goto (context slug))`

On click, this will goto the `/context/slug` page.

Context pages must be created first in the Story Keep.

### goto product

Usage: `(goto (product slug))`

On click, this will goto the `/products/slug` page.

This slug must exist as a product and the Shopify integration must be enabled.

### goto storyFragment

Usage: `(goto (storyFragment slug))`

On click, this will goto the `/slug` page, or `/` if home slug.

Story Fragments must be created first in the Story Keep.

### goto storyFragmentPane

Usage: `(goto (storyFragmentPane slug1 slug2))`

On click, this will goto the `/slug1#slug2` page, or `/#slug2` if home slug. The particular pane section of the page will be scrolled into view.

Story Fragments and Panes must be created first in the Story Keep.
