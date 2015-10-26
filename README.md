# Getting started with CSS Grid Layout Module

Every single website we are building today has a grid layout, and for years we are doing layouts differently. In the old days tables were used to create the layout, then we started to use float, box-sizing, but now a new, shiny, and elegant solution for creating layouts comes with [CSS Grid Layout Module](https://drafts.csswg.org/css-grid-1/).

As the initial motivation behind Grid layout is to make layout creation easily, we no longer need to implement layouts using HTML tables, floats and other CSS hacks like clearfix, the Grid Module will be the native support for creating grids in the browser.

In this introduction we will discover the new **CSS Grid Layout Module**, what is the current browser support, how it works with some examples.

## Browser Support

Before we can div into the Grid Layout, we need to talk about the current [browser support](http://caniuse.com/#feat=css-grid) and how to enable this feature in the current browsers.

![browser-support](https://cloud.githubusercontent.com/assets/626005/10709349/0b479a46-7a2a-11e5-9226-875df264375f.png)

Since the first proposal of the Grid developed by Microsoft, it's implemented in IE10.

##### Google Chrome

From `chrome://flags` URL, look for `Enable experimental Web Platform features`flag, enable it, then you will be asked to Relaunch Chrome.

![chrome-config](https://cloud.githubusercontent.com/assets/626005/9566281/bcbb9d78-4eff-11e5-8784-76400fce453e.jpg)

##### Firefox
From `about:config` URL, search for `layout.css.grid.enabled`, then double click, or press enter to activate it.

![firefox-config](https://cloud.githubusercontent.com/assets/626005/9566280/bcb081b8-4eff-11e5-8f78-bce7fa0a6ded.jpg)

As I have tried Firefox but it seems like there are some problems rendering the layout, we can use Google Chrome.

## What is CSS Grid Layout

The core idea about the Grid Layout is to partition the web page into a defined set of rows and columns, then we have the ability to position and size those partitions based on the rows and columns we just created.

> This CSS module defines a two-dimensional grid-based layout system, optimized for user interface design. In the grid layout model, the children of a grid container can be positioned into arbitrary slots in a flexible or fixed predefined layout grid.

## Grid Layout Example

Let's start with an example to see the power of the Grid Module, imagine we need to create a page with one row and full height 4 columns.

![vertical-grid](https://cloud.githubusercontent.com/assets/626005/9573251/59eb41ce-4fba-11e5-92d8-d16ee6bdfc6b.jpg)

``` html
<div class="grid">
  <div class="tweets">Tweets</div>
  <div class="replies">Replies</div>
  <div class="search">Search</div>
  <div class="messages">Messages</div>
</div>
```

``` css
.grid {
  /* Set the display property to grid, this is mandatory */
  display: grid;
  
  /* Divide this grid container into 4 columns each one is 25% */
  grid-template-columns: 25% 25% 25% 25%;
  
  /* Create a one row and set the height be 100vh */
  grid-template-rows: 100vh;
}
```

The `grid-template-columns` responsibility is to divide the `grid` container into columns, in our case we did a 4 columns each one with 25% of the page width.

The `grid-template-rows` use case is to create rows, in our example we only need one row, if we set the columns to be just 2 we may need to create two rows each is `50vh` height.

``` css
.grid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50vh 50vh;
}
```

So this will give us a 4 boxes layout like

![screen shot 2015-08-29 at 12 34 18](https://cloud.githubusercontent.com/assets/626005/9561557/899242fe-4e4a-11e5-8f35-630fce7b84e6.png)

We can also achieve the above example only on small screens by wrapping the code inside a media query, this opens a great opportunity to customize the layout easily in different viewports.

``` css
@media screen and (max-width: 1024px) {
  .grid {
    /* Divide the page into 2 columns each one is 50% */
    grid-template-columns: 50% 50%;
    /* Create 2 rows and set the height to be 50vh for each */
    grid-template-rows: 50vh 50vh;
  }
}
```

A very interesting feature of the Grid Module is the ability to rearrange the page partitions visually without editing HTML, or we can call it the source order. As in the preceding example, and for small screens we want to bring the messages section to be the first section, we need to move it to the first column in the first row.

![screen shot 2015-08-29 at 12 48 29](https://cloud.githubusercontent.com/assets/626005/9561604/55085a3a-4e4c-11e5-9f86-1220f260bb16.png)

``` css
@media screen and (max-width: 1024px) {
  
  /* ....  */

  /* Set the message position in the column 1 and row 1 */
  .messages { grid-column: 1; grid-row: 1; }
}
```

A use case for this when we need to set the position of the sidebar based on the screen size, so for large screen it will be on the left side but in small screens set it to the bottom of the main content section.

![screen shot 2015-09-01 at 8 46 52 am](https://cloud.githubusercontent.com/assets/626005/9597835/093d916a-5086-11e5-97f2-c8e7da9ad672.png)

## Grid Layout Module Concepts

There are some basic concepts that we need to know for a better understanding the new Module.

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

#### using grid-template-areas

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

## What Is CSS Grid Layout in More Details

`grid span`

How many grid tracks the grid item occupies

#### Grid Container

`fr` => flex factor: rakes the remaining space

## Example

What about using the Grid Module to implement a real example, what about creating the building blocks of the Slack layout.

[![Slack Image][slack-image]](https://brandfolder.com/slack)

Since we are interested, and talking about layouts, we can abstract and simplify the Slack design to the building blocks represented in the grid, something like this:

![slack layout](https://cloud.githubusercontent.com/assets/626005/10723155/9a454774-7bc0-11e5-9fef-add642356e63.png)

## Conclusion

Demo: http://codepen.io/ahmadajmi/pen/Qjxvqj

#### Drafts
A very interesting feature of the Grid Module is the ability to adapt the content layout to changes in different devices and viewports without changing the semantic of the content.

[caniuse suppport]:http://caniuse.com/#feat=css-grid
[CSS Grid Layout Module Level 1]:https://drafts.csswg.org/css-grid/
[CSS Grid Layout Examples]:https://igalia.github.io/css-grid-layout/index.html
[Grid by Example]:http://gridbyexample.com/
[Microsoft Grid Layout]:https://msdn.microsoft.com/en-gb/library/hh772052.aspx
[slack-image]:https://cloud.githubusercontent.com/assets/626005/10714425/eb63804a-7af7-11e5-91aa-11f3a8b718ad.png