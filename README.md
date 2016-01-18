# Introduction to CSS Grid Layout Module

Back to the old days of creating web pages, we used HTML tables to create page layout, and then we started to use some CSS properties like floats combined with clearfix, and box-sizing. Another option is to use a CSS framework to help us create the complex layouts we need.

As Web Applications becomes more and more complex in different domains including layouts and responsive design, we need as web developers a more natural, and native way to do complex layouts easily without any hacks and workarounds. Fortunately an exciting new  solution for creating layouts comes with the [CSS Grid Layout Module](http://www.w3.org/TR/css-grid-1/).

In this introduction we will discover the new **Grid Module**, the current browser support, and how it works with some practical examples.

## What is CSS Grid Layout Module?

The core idea behind the Grid Layout is to divide the web page into columns and rows, and then we have the ability to position and size the building block elements based on the rows and columns we have created in terms of size, position and layer.

The Grid also gives us a flexible way to change the layout elements position with only CSS without any change to HTML, which could be used with Media Queries to change the layout at different breakpoints.

## Browser Support

Before we can dive more into the Grid, we need to talk about the current [browser support](http://caniuse.com/#feat=css-grid), and how we can enable it in the current browsers.

![browser-support](https://cloud.githubusercontent.com/assets/626005/12323536/bcc330f2-bac4-11e5-9468-a46994f3b7ce.jpg)

### Internet Explorer

Since the first proposal of the Grid developed by Microsoft, Internet Explorer 10 shipped with a `-ms` prefixed implementation. If we take a look at the image above, or [Can I Use](http://caniuse.com/#feat=css-grid) report, we can see that both Internet Explorer 11, and Edge are also supported. In other browsers the Grid Layout is not supported by default, but we can enable it as we will see next.

### Blink Rendering Engine (Chrome, Opera)

Navigate to `chrome://flags` URL, look for `Enable experimental Web Platform features` flag, enable it, then you will be asked to relaunch Chrome.

![support-chrome](https://cloud.githubusercontent.com/assets/626005/10864161/93b1a55c-7fed-11e5-806c-dbaac9e66a73.jpg)

It's recommended to use either Chrome or Opera with the article examples or your own next experimentations, as the [Blink](http://www.chromium.org/blink) engine has the [most updated implementations](http://gridbyexample.com/browsers/).

### Firefox

Navigate to `about:config` URL, search for `layout.css.grid.enabled` flag, then double click or press enter to toggle it to `true` for activation.

![support-firefox](https://cloud.githubusercontent.com/assets/626005/10864162/93bb055c-7fed-11e5-9777-d69d22c319c5.jpg)

### Polyfill

A [Polyfill](https://github.com/FremyCompany/css-grid-polyfill) is also available to provide a working implementation of the Grid Module for current browsers.

## Grid Layout Example

Let's start with an example to see the power of the Grid Module, and then we will explain some new concepts in more details.

Imagine we want to create an application for Twitter with four full height columns layout (Tweets, Replies, Search, and Messages), something abstracted and similar to the screenshot below.

![basic-4-column-layout](https://cloud.githubusercontent.com/assets/626005/12036357/f7d0aeaa-ae4d-11e5-87d9-b61af7df781d.jpg)

Application HTML will be:

``` html
<div class='app-layout'>
  <div class='tweets'>Tweets</div>
  <div class='replies'>Replies</div>
  <div class='search'>Search</div>
  <div class='messages'>Messages</div>
</div>
```

Then we will apply our CSS code on the `.app-layout` container element:

``` scss
.app-layout {
  display: grid; // 1
  grid-template-columns: 1fr 1fr 1fr 1fr; // 2
  grid-template-rows: 100vh; // 3
}
```

Demo: [4 columns layout using CSS Grid](http://codepen.io/ahmadajmi/pen/yeoGme?editors=110)

Here is the explanation of what we've done in the previous CSS code:

1. Set the display property value to `grid`.
2. Divide the container element into four columns, each column is `1fr` [(one fraction)](http://www.w3.org/TR/2011/WD-css3-values-20110906/#fr-unit) of the free space within the grid container.
3. Create one row and set the height to be `100vh` (full viewport height).

The new Grid Module added a new value to the `display` property which is `grid`. The `grid` property is responsible for setting the `.app-layout` element to be a grid container, which also establishes a new [grid formatting context](https://www.w3.org/TR/2015/WD-css-grid-1-20150917/#grid-formatting-context) for its contents. This property is required to start using the Grid.

The `grid-template-columns` specifies the width of each grid column within the Grid, and in our case it divides the `.app-layout` container to four columns, each one is `1fr` (25%) of the available space.

The `grid-template-rows` specifies the height of each grid row in the Grid, and in our example we only created one row to be `100vh`.

If wee need to create a layout with two columns, and two rows as:

![basic-4-column-2-rows-layout](https://cloud.githubusercontent.com/assets/626005/12037049/08932e74-ae54-11e5-8e97-1fb69aee3526.jpg)

``` css
.app-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50vh 50vh;
}
```

Demo: [4 boxes layout using CSS Grid](http://codepen.io/ahmadajmi/pen/OMjdLG?editors=110)

We can also achieve the above example only on small screens by wrapping the code inside a media query. This opens a great opportunity for us to customize the layout differently in different viewports. For example, we can create the previous layout only on a viewport less than `1024px` as:

``` css
@media screen and (max-width: 1024px) {
  .app-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50vh 50vh;
  }
}
```

Demo: [4 boxes layout using CSS Grid - Responsive](http://codepen.io/ahmadajmi/pen/XXzXVW?editors=110)

## Grid Layout Module Concepts

After we have did our first example, there are some new concepts that we need to know for a better understanding the new Module. There are a lot of new concepts, we will only take a look at a few of them.

**Grid Item**

Grid items are the child elements of the grid container, like `.tweets`, and `.replies` elements.

**Grid Lines**

![grid-lines-mockup](https://cloud.githubusercontent.com/assets/626005/12065042/28d70cf6-afd9-11e5-9325-4c437236a621.png)

A Grid Line is a line exist on either side of a column or a row. There are two sets of grid lines: one set defining columns (vertical axis), and another set defining rows (horizontal axis).

From the above screenshot that represents the first example, we did four columns each one is `1fr` which will give us five vertical lines, and we did one row, which will give us two horizontal lines.

Let's see how we can position a gird item inside the grid container in the two ways:

### Position Items by Using a Line Number

We can refer to the exact line number by using new properties like `grid-column-start`, and `grid-column-end`, we then give theses properties the start line and the end line numbers.

From the previous example, this is how the browser position the elements by default for us, and we can mimic the default columns positions as:

``` scss
.tweets   {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
}

.replies  {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 1;
}

.search   {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row: 1;
}

.messages {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row: 1;
}
```

Let's take the `.tweet` column and see how the position is working:

1. Position the child element from the first vertical line to the left.
2. End the element position by the second vertical line.
3. Position the element inside the whole row.

Let's change this by changing the order of elements with different positions, so our elements order will be: `.search`, `.replies`, `.messages`, and `.tweets`.

![basic-4-column-layout--revert](https://cloud.githubusercontent.com/assets/626005/12064116/a7fbaa66-afc3-11e5-8573-2268b5f01b5d.jpg)

``` scss
.search   {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
}

.replies  {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 1;
}

.messages {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row: 1;
}

.tweets   {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row: 1;
}
```

Or simply we can use the `grid-column` shortcut to set the start, and end lines as:

``` scss
.search   {
  grid-column: 1 / 2;
  grid-row: 1;
}

.replies  {
  grid-column: 2 / 3;
  grid-row: 1;
}

.messages {
  grid-column: 3 / 4;
  grid-row: 1;
}

.tweets   {
  grid-column: 4 / 5;
  grid-row: 1;
}
```

Demo: [4 columns layout using CSS Grid - Search First](http://codepen.io/ahmadajmi/pen/PZKXVX?editors=110)

We have changed the layout structure with only CSS, and the markup is still as it is without any changes, this is a huge advantage of using the new Grid Module.

We can rearrange the layout of elements independent of their source order, so we can achieve the desired layout in different screen size, orientation. This is very useful because we will separate the markup from CSS and change everything from CSS without editing HTML anymore.

## Position Items by Using Named Areas

A grid area is the logical space used to layout one or more grid items, we can name a grid area explicitly using the `grid-template-areas` property, then we can place a grid item into a specific area using the `grid-area` property.

To make the concept more clear, let's redo our four columns example, with columns reorder as `search` column comes first.

``` csss
.app-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100vh;

  // We divided the grid container into four named grid areas, each one for a column
  grid-template-areas: "search replies messages tweets";
}
```

The next step is to position each grid item into a named area:

``` scss
.search { grid-area: search; }
.replies { grid-area: replies; }
.messages { grid-area: messages; }
.tweets { grid-area: tweets; }
```

Demo: [4 columns layout using CSS Grid - grid-area](http://codepen.io/ahmadajmi/pen/xZXQmo?editors=110)

## Slack Example

What about using the Grid Module to implement a more complex example, what about creating the building blocks of the [Slack](https://slack.com/) application layout.

Since we are talking about layouts, we will abstract and simplify the Slack design to the building blocks represented in the grid, something like this:

![slack layout](https://cloud.githubusercontent.com/assets/626005/10723155/9a454774-7bc0-11e5-9fef-add642356e63.png)

From this layout we will create three vertical columns, and three horizontal rows, and we can visualize it as:

![grid-lines-mockup--slack](https://cloud.githubusercontent.com/assets/626005/12065055/541c987c-afd9-11e5-8214-a2c7e0f91804.png)

We will start with the layout HTML:

```html
<div class='app-layout'>
    <div class='teams'>Teams</div>
    <div class='channels'>Channels</div>
    <div class='header'>Header</div>
    <div class='messages'>
      <ul class='message-list'>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class='input'>
      <input type='text' placeholder='CSS Grid Layout Module'>
    </div>
  </div>
```

And the CSS:

```scss
.app-layout {
  display: grid;
  height: 100vh;

  // Create three columns:
  // First columns is: 100px width
  // Second columns is: 250px width
  // Third columns is: the available space
  grid-template-columns: 100px 250px 1fr;

  // Create three rows
  // First row: auto height
  // Second row: the available space
  // Third row: auto height
  grid-template-rows: auto 1fr auto;
}

.teams {
  grid-column: 1;
  grid-row: 1 / 4;
}

.channels {
  grid-column: 2;
  grid-row: 1 / 4;
}

.header {
  grid-column: 3;
  grid-row: 1;
}

.messages {
  grid-column: 3;
  grid-row: 2;
}

.input {
  grid-column: 3;
  grid-row: 3;
}
```

Demo: [Slack layout using CSS Grid](http://codepen.io/ahmadajmi/pen/YwNrNG)

**Using Named Areas**

```scss
.app-layout {
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 250px 1fr;
  grid-template-rows: auto 1fr auto;

  // Create three columns and three rows template, with nine named grid areas

  // The teams area spans the first column and the three rows
  // The channels area spans the first column and the three rows
  // The header area at the third column and the first row
  // The messages area at the third column and the second row
  // The input area at the third column and the third row
  grid-template-areas: "teams channels header"
                       "teams channels messages"
                       "teams channels input";
}

.teams {
  grid-area: teams;
}

.channels {
  grid-area: channels;
}

.header {
  grid-area: header;
}

.messages {
  grid-area: messages;
}

.input {
  grid-area: input;
}
```

Demo: [Slack layout using CSS Grid - Named Areas](http://codepen.io/ahmadajmi/pen/dGZmZE?editors=110)

In a small screen we can position all child elements on top of each other, this will require us to modify the columns, rows, and areas like this:

```scss
@media screen and (max-width: 1024px) {
  .app-layout {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto 1fr auto;
    grid-template-areas: "header"
                         "teams"
                         "channels"
                         "messages"
                         "input";
  }
}
```

Demo: [Slack layout using CSS Grid - Responsive Named Areas](http://codepen.io/ahmadajmi/pen/gPgGgR?editors=110)

## Grid Layout Module vs Flexbox

Since many of us have used Flexbox before, one question would come to mind to say: When can I user Flexbox, and when can I use the Grid Module?

There are two good answers I read about the difference, and the context in which we can use any of them.

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

## CSS Grid Layout Module Resources

We have not covered all the Module concepts and syntax, so I recommend you to discover and read from theses great resources to get deeper into the Grid.

* [CSS Grid Layout Module - W3C](http://www.w3.org/TR/css-grid-1/)
* [CSS Grid Layout Examples](https://igalia.github.io/css-grid-layout/index.html)
* [Grid by Example](http://gridbyexample.com/)
* [The future of layout with CSS: Grid Layouts](https://hacks.mozilla.org/2015/09/the-future-of-layout-with-css-grid-layouts/)
* Follow [Rachel Andrew](https://rachelandrew.co.uk/) for new updates, and resources. She is doing a great work regarding the Grid.

## Conclusion

As we’ve seen, the upcoming CSS Grid Layout Model is awesome in different areas like: less code we have to write, the power of changing the layout only with CSS, responsive design, and this enables us making complex layouts in a new and native way, and it will change the way we create layout for the web.