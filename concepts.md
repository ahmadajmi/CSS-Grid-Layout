## Flexbox

Primarily a method for laying out items in a single horizontal or vertical line.

## Grid Layout

Proposal developed by Microsoft

## Grid Layout vs Flexbox

> Flexbox is for one-dimensional layouts - anything that needs to be
laid out in a straight line (or in a broken line, which would be a
single straight line if they were joined back together).

> Grid is for two-dimensional layouts.  It can be used as a low-powered
flexbox substitute (we're trying to make sure that a single-column/row
grid acts very similar to a flexbox), but that's not using its full
power.

> Flexbox is appropriate for many layouts, and a lot of "page component"
elements, as most of them are fundamentally linear.  Grid is
appropriate for overall page layout, and for complicated page
components which aren't linear in their design.

> The two can be composed arbitrarily, so once they're both widely
supported, I believe most pages will be composed of an outer grid for
the overall layout, a mix of nested flexboxes and grid for the
components of the page, and finally block/inline/table layout at the
"leaves" of the page, where the text and content live.

[Grid Layout vs Flexbox by: Tab Atkins](https://lists.w3.org/Archives/Public/www-style/2013May/0114.html)

> Grid Layout for the main page structure of rows and columns.

> Flexbox for navigation, UI elements, anything you could linearize.

[Flexbox and Grid Layout by: Rachel Andrew](http://www.slideshare.net/rachelandrew/flexbox-and-grid-layout/89)

> Grid is a companion to the Flexible Box Module (flexbox). Flexbox is designed for one-dimensional layout, so things can be arranged in an unbroken line. Grid is designed for two-dimensional layout, meaning the items don't need to sit next to each other. In the future we're likely to use both: Grid Layout for main page areas, and flexbox for the smaller UI elements it excels with.

[Introducing the CSS Grid Layout spec](http://www.creativebloq.com/css3/introducing-css-grid-layout-spec-111517952)

`grid span`

How many grid tracks the grid item occupies

`fr` => flex factor: takes the remaining space

## Good Resources
[Flexbox and Grid Layout by: Rachel Andrew](http://www.slideshare.net/rachelandrew/flexbox-and-grid-layout/89)
