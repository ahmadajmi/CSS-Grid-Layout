# Introduction to CSS Grid Layout Module

Back to the old days of creating web pages, we used HTML tables to create page layout, then we started to use floats with clearfix, and box-sizing, but a new solution for creating layouts comes with [CSS Grid Layout Module](https://drafts.csswg.org/css-grid-1/).

In this introduction we will discover the new **CSS Grid Layout Module**, the current browser support, and how it works with some practical examples.

## What is CSS Grid Layout?

The core idea behind the Grid Layout is to partition the web page into a defined set of rows and columns, and then we have the ability to position and size those partitions based on the rows and columns we created.

> This CSS module defines a two-dimensional grid-based layout system, optimized for user interface design. In the grid layout model, the children of a grid container can be positioned into arbitrary slots in a flexible or fixed predefined layout grid.

## Browser Support

Before we can div more into the Grid Layout, we need to talk about the current [browser support](http://caniuse.com/#feat=css-grid), and how we can enable it in the current browsers.

![browser-support](https://cloud.githubusercontent.com/assets/626005/11093188/5eeace82-8891-11e5-83ad-59ace53d8164.jpg)

##### Internet Explorer

Since the first proposal of the Grid developed by Microsoft, it is first implemented in IE10 version.

##### Google Chrome

From `chrome://flags` URL, look for `Enable experimental Web Platform features` flag, enable it, and then you will be asked to Relaunch Chrome.

![support-chrome](https://cloud.githubusercontent.com/assets/626005/10864161/93b1a55c-7fed-11e5-806c-dbaac9e66a73.jpg)

##### Firefox

From `about:config` URL, search for `layout.css.grid.enabled` flag, then double click or press enter to toggle it to true for activation.

![support-firefox](https://cloud.githubusercontent.com/assets/626005/10864162/93bb055c-7fed-11e5-9777-d69d22c319c5.jpg)

##### Polyfill

As I have tried Firefox but it seems like there are some problems rendering the layout, we can use Google Chrome.

## Grid Layout Example

Let's start with an example to see the power of the Grid Module, then we can explain some concepts in more details. Imagine we want to create a page layout with one row, and 4 columns (full height).

Let's start with an example to see the power of the Grid Module. Imagine we want to create a page layout with one row, and 4 full height columns.

![vertical-grid](https://cloud.githubusercontent.com/assets/626005/9573251/59eb41ce-4fba-11e5-92d8-d16ee6bdfc6b.jpg)

``` html
<div class='grid-layout'>
  <div class='tweets'>Tweets</div>
  <div class='replies'>Replies</div>
  <div class='search'>Search</div>
  <div class='messages'>Messages</div>
</div>
```

``` css
.grid-layout {
  display: grid; /* 1 */
  grid-template-columns: 25% 25% 25% 25%; /* 2 */
  grid-template-rows: 100vh; /* 3 */
}
```

Here is the explanation of what we've done in the previous CSS code snippet:

* Set the display property to `grid`.
* Divide the grid container into 4 columns, and each one is `25%`.
* Create one row, and set the height be `100vh`.

The `grid` responsibility is to set the `grid-layout` container to `gird`, and this is a required property.

The `grid-template-columns` responsibility is to divide the `grid-layout` container into columns, and in our case we did a 4 columns each one with `25%` of the page width.

The `grid-template-rows` use case is to create the layout rows, and in our example we only created one row. If we set the columns to be just 2 we may need to create two rows each is `50vh` height as the following example.

``` css
.grid-layout {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50vh 50vh;
}
```

So this will give us a 4 boxes layout like

![screen shot 2015-08-29 at 12 34 18](https://cloud.githubusercontent.com/assets/626005/9561557/899242fe-4e4a-11e5-8f35-630fce7b84e6.png)

We can also achieve the above example only on small screens by wrapping the code inside Media Queries. This opens a great opportunity for us to customize the layout differently in different viewports. For example, we can achive the pevious 4 boxes layout only on screens less than `1024px` as:


``` css
@media screen and (max-width: 1024px) {
  .grid-layout {
  	display: grid;
  	grid-template-columns: 50% 50%;
  	grid-template-rows: 50vh 50vh;
  }
}
```

A very interesting feature of the Grid Module is the ability to rearrange the page partitions visually without editing HTML, or the source order. As in the preceding example, and for small screens we want to bring the messages section to be the first one, in another way we need to move it to the first column in the first row.

![screen shot 2015-08-29 at 12 48 29](https://cloud.githubusercontent.com/assets/626005/9561604/55085a3a-4e4c-11e5-9f86-1220f260bb16.png)

``` css
@media screen and (max-width: 1024px) {
  
  /* ....  */

  /* Set the message position in the column 1 and row 1 */
  .messages { grid-column: 1; grid-row: 1; }
}
```

A use case for this when we need to set the position of the sidebar based on the screen size, so for large screen it will be on the left side, but in small screens we can position it to the bottom of the main content.

![screen shot 2015-09-01 at 8 46 52 am](https://cloud.githubusercontent.com/assets/626005/9597835/093d916a-5086-11e5-97f2-c8e7da9ad672.png)

## Grid Layout Module Concepts

There are some new concepts that we need to know for a better understanding the new Module.

**Grid Element**
This is the basic building block.

**Grid Lines**

horizontal and vertical dividing lines

The horizontal and vertical dividing lines of the grid, lines exists on either side of a column or a row. We can refer to a grid line by a numerical index or by a specific name.

![grid-lines](https://cloud.githubusercontent.com/assets/626005/9755781/266a84f0-56d5-11e5-92f4-cc40fb3154d8.png)

**Grid Track**

A generic term for column or row

A generic term of for a grid column or grid row, or it's the space between to adjacent grid lines and each track is assigned a sizing function which controls how wide or tall the column or row may grow.

**Grid Cell**

Smallest area bounded by grid lines

Is the smallest unit of the grid and it is the space between two adjacent row and two adjacent column grid lines.

A grid cell is the similar term for the full grid—it is the space between two adjacent row and two adjacent column grid lines. It is the smallest unit of the grid that can be referenced when positioning grid items.

**Grid Item**

Grid Items are the child elements of the grid container and the contents of the grid container consists of zero or more grid items.

**Grid Area**

logical space used to layout one or more grid items

The space used to layout one or more grid items bound by 4 grid lines.

#### The Explicit Grid

Defined by 3 properties 

`grid-template-rows` is a space separated track list which includes line names and sizing functions of the grid rows.

`grid-template-columns` specifies the column information as for rows property

`grid-template-areas` specifies named areas which are not associated with any particular grid item. Also useful to visualize the grid

## Using grid-template-areas

Another option is to sue the `grid-template-areas` to divide the page sections into areas, each area with a specific name.

``` css
.grid {
  display: grid;
  /*
  the first row is :  tweets replies
  the second row is: search messgaes
  and each word in the row represents a column
   */  
  grid-template-areas: "tweets replies"
                       "search messgaes";

  grid-template-columns: 50% 50%;
  grid-template-rows: 50vh 50vh;
}

@media screen and (max-width: 1024px) {
  .grid {
    display: grid;

    grid-template-areas: "messages search"
                         "replies tweets";

    grid-template-columns: 50% 50%;
    grid-template-rows: 50vh 50vh;
  }
}

/* Instead of doing this */
.tweets { grid-column: 2; grid-row: 1; }

/* we can do this instead and give it the name of the area in which we want to place in and in this case the replied area 
So the tweets section will come in the second column in the first row
and in small screen it will come in the first row in the second row
*/

.tweets { grid-area: replies; }
```

## Slack Example

What about using the Grid Module to implement a real example, what about creating the building blocks of the Slack layout.

[![Slack Image][slack-image]](https://brandfolder.com/slack)

Since we are interested, and talking about layouts, we can abstract and simplify the Slack design to the building blocks represented in the grid, something like this:

![slack layout](https://cloud.githubusercontent.com/assets/626005/10723155/9a454774-7bc0-11e5-9fef-add642356e63.png)

```html
<div class='slack-layout'>
    <div class='header'>Header</div>
    <div class='teams'>Teams</div>
    <div class='channels'>Channels</div>
    <div class='messages'>
      <ul class='message-list'>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class='message-input box'>
      <input type='text' placeholder='CSS Grid Layout Module'>
    </div>
  </div>
```

```css
.slack-layout {
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 250px 1fr;
  grid-template-rows: auto 1fr auto;
}

.header {
  grid-column: 3;
  grid-row: 1;
}

.teams {
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: span 3;
}

.channels {
  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: span 3;
}

.messages {
  grid-column: 3;
  grid-row: 2;
}

.message-input {
  grid-column: 3;
  grid-row: 3;
}

```

Demo: http://codepen.io/ahmadajmi/pen/Qjxvqj

## Grid Layout Module vs Flexbox

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

## Resources

[W3C CSS Grid Layout Module](https://drafts.csswg.org/css-grid-1/)

[Flexbox and Grid Layout by: Rachel Andrew](http://www.slideshare.net/rachelandrew/flexbox-and-grid-layout/89)

[The future of layout with css grid layouts](https://hacks.mozilla.org/2015/09/the-future-of-layout-with-css-grid-layouts/)

## Conclusion


[caniuse suppport]:http://caniuse.com/#feat=css-grid
[CSS Grid Layout Module Level 1]:https://drafts.csswg.org/css-grid/
[CSS Grid Layout Examples]:https://igalia.github.io/css-grid-layout/index.html
[Grid by Example]:http://gridbyexample.com/
[Microsoft Grid Layout]:https://msdn.microsoft.com/en-gb/library/hh772052.aspx
[slack-image]:https://cloud.githubusercontent.com/assets/626005/10714425/eb63804a-7af7-11e5-91aa-11f3a8b718ad.png
[css-grid-polyfill]:https://github.com/FremyCompany/css-grid-polyfill