# Introduction to CSS Grid Layout Module

Back to the old days of creating web pages, we used HTML tables to create page layout, and then we started to use some CSS properties like floats combined with clearfix, and box-sizing. Another option is to use a CSS framework to help us create the complex layouts we need.

As web applications becomes more and more complex in different domains including layouts and responsive design, we need as web developers a more natural, and native way to do complex layouts easily without any hacks and workarounds. Fortunately a new and exciting solution for creating layouts comes with [CSS Grid Layout Module](http://www.w3.org/TR/css-grid-1/).

In this introduction we will discover the new **CSS Grid Layout Module**, the current browser support, and how it works with some practical examples.

## What is CSS Grid Layout Module?

The core idea behind the Grid Layout is to divide the web page into columns and rows, and then we have the ability to position and size the building block elements based on the rows and columns we have created in terms of size, position and layer.

The Grid also gives us a flexible way to change layout elements position with CSS at different breakpoints using media queries without any change to HTML structure.

## Browser Support

Before we can div more into the Grid, we need to talk about the current [browser support](http://caniuse.com/#feat=css-grid), and how we can enable it in the current browsers.

![browser-support](https://cloud.githubusercontent.com/assets/626005/11093188/5eeace82-8891-11e5-83ad-59ace53d8164.jpg)

##### Internet Explorer

Since the first proposal of the Grid developed by Microsoft, Internet Explorer 10 shipped with a ```-ms``` prefixed implementation. If we take a look at the image above, or at the [Can I Use](http://caniuse.com/#feat=css-grid) report, we can see that Internet Explorer 11, and the Edge browsers are also supported. In other browsers the Grid Layout is not supported by default, but can be enabled.

##### Google Chrome

Navigate to `chrome://flags` URL, look for `Enable experimental Web Platform features` flag, enable it, and then you will be asked to relaunch Chrome.

![support-chrome](https://cloud.githubusercontent.com/assets/626005/10864161/93b1a55c-7fed-11e5-806c-dbaac9e66a73.jpg)

##### Firefox

Navigate to `about:config` URL, search for `layout.css.grid.enabled` flag, then double click or press enter to toggle it to true for activation.

![support-firefox](https://cloud.githubusercontent.com/assets/626005/10864162/93bb055c-7fed-11e5-9777-d69d22c319c5.jpg)

##### Polyfill

A [Polyfill] is currently available.

## Grid Layout Example

Let's start with an example to see the power of the Grid Module, and then we will explain some concepts in more details.

Imagine we want to create a Twitter application with four full height columns layout (Tweets, Replies, Search, and Messages), something abstracted and  similar to the screenshot below.

![basic-4-column-layout](https://cloud.githubusercontent.com/assets/626005/12036357/f7d0aeaa-ae4d-11e5-87d9-b61af7df781d.jpg)

We start with the HTMl code:

``` html
<div class='app-layout'>
  <div class='tweets'>Tweets</div>
  <div class='replies'>Replies</div>
  <div class='search'>Search</div>
  <div class='messages'>Messages</div>
</div>
```

``` scss
.app-layout {
  display: grid; // 1
  grid-template-columns: 1fr 1fr 1fr 1fr; // 2
  grid-template-rows: 100vh; // 3
}
```

Here is the explanation of what we've done in the previous CSS snippet:

1. Set the display property value to `grid`.
* Divide the grid container into four columns, and each one is `1fr` of the free space in the grid container.
* Create one row, and set the height to be `100vh` (full viewport height).

The Grid Layout added a new value to the `display` property which is `grid`, responsible for setting the `.app-layout` element to be a grid container, this is the foundation property, and required to start using the Grid.

The `grid-template-columns` specifies the width of each grid column within the Grid, and in our case it divides the `.app-layout` container into four columns, each one is `1fr` [(one fraction)](http://www.w3.org/TR/2011/WD-css3-values-20110906/#fr-unit) of the available space.

The `grid-template-rows` specifies the height of each grid row in the Grid, and in our example we only created one row to be `100vh`.

If wee need to create a layout with two columns and two rows, we can do:

``` css
.app-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50vh 50vh;
}
```

So this will give us a four boxes layout like:

![basic-4-column-2-rows-layout](https://cloud.githubusercontent.com/assets/626005/12037049/08932e74-ae54-11e5-8e97-1fb69aee3526.jpg)

## Grid Layout Module Concepts

After we have seen some practical examples, there are lots of new concepts, we will get to know some of them in this article, that we need to know for a better understanding the new Module.

**Grid Container**

<!-- this sections needs some more info review
    http://www.w3.org/TR/css-grid-1/#grid-model
-->

This is the basic building block.

**Grid Item**

Grid items are the child elements of the Grid container, like `.tweets` and `.replies` elements.

**Grid Lines**

![grid-lines-mockup](https://cloud.githubusercontent.com/assets/626005/12065042/28d70cf6-afd9-11e5-9325-4c437236a621.png)

From the first example, we did four columns each one is `1fr` which will give us five vertical lines, and we did one row, which will give us two horizontal lines.

<!-- this sections needs some review -->
There are two sets of grid lines: one set defining columns (vertical axis), and another set defining rows (horizontal axis).

The horizontal and vertical dividing lines of the grid, a line exists on either side of a column or a row. We can refer to a grid line by a numerical index, or by an author-specified name, and we will get to this soon.

When we are placing an element inside the container we can reference theses lines, if we want to place the header, we will put it between the first and the third vertical lines.

We can mimic the default columns positions as:

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

Let's take the `.tweet` columns and see how is things are working:

1. Position the child element from the first line to the left.
2. End the element position by line 2.
3. Position the element to be the whole row.

Let's change this by changing the order of elements with different positions, so our elements order will be (`.search`, `.replies`, `.messages`, `.tweets`).

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

Or simply we can use the `grid-column` shortcut to set the start and end lines as:

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

**Grid Track**

A generic term for column or row

A generic term of for a grid column or grid row, or it's the space between to adjacent grid lines and each track is assigned a sizing function which controls how wide or tall the column or row may grow.

**Grid Cell**

The smallest unit of the grid that can be referenced when positioning grid lines. It is the space between two adjacent row and two adjacent column grid lines, or the space between 4 grid lines.

**Grid Area**

The space used to layout one or more grid items bound by 4 grid lines.

## Using grid-template-areas

Another option is to use the `grid-template-areas` to divide the page sections into areas, each area with a specific name.

``` scss
.app-layout {
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

// Instead of doing this
.tweets { grid-column: 2; grid-row: 1; }

// we can do this instead and give it the name of the area in which we want to // place in and in this case the replied area
// So the tweets section will come in the second column in the first row
// and in small screen it will come in the first row in the second row

.tweets { grid-area: replies; }
```

## Source-Order Independence

We can rearrange the layout of elements independent of their source order, so we can achieve the desired layout in different screen size, orientation. This is very useful because we will separate the markup from CSS and change everything from CSS without editing HTML markup anymore.

In the preceding example, and for small screens we want to bring the messages section to be the first one, in another way we need to move it to the first column in the first row.

![screen shot 2015-08-29 at 12 48 29](https://cloud.githubusercontent.com/assets/626005/9561604/55085a3a-4e4c-11e5-9f86-1220f260bb16.png)

``` scss
@media screen and (max-width: 1024px) {

  // ...

  // Set the message position in the column 1 and row 1
  .messages { grid-column: 1; grid-row: 1; }
}
```

A use case for this when we need to set the position of the sidebar based on the screen size, so for large screen it will be on the left side, but in small screens we can position it to the bottom of the main content.

![screen shot 2015-09-01 at 8 46 52 am](https://cloud.githubusercontent.com/assets/626005/9597835/093d916a-5086-11e5-97f2-c8e7da9ad672.png)

As you can see, we only do changes in CSS, and we didn't touch HTML code.

## Responsive Design

We can also achieve the above example only on small screens by wrapping the code inside Media Queries. This opens a great opportunity for us to customize the layout differently in different viewports. For example, we can create the previous layout only on screens less than `1024px` as:

``` css
@media screen and (max-width: 1024px) {
  .grid-layout {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50vh 50vh;
  }
}
```

## Slack Example

What about using the Grid Module to implement a more complex example, what about creating the building blocks of the [Slack](https://slack.com/) application layout.

Since we are talking about layouts, we will abstract and simplify the Slack design to the building blocks represented in the grid, something like this:

![slack layout](https://cloud.githubusercontent.com/assets/626005/10723155/9a454774-7bc0-11e5-9fef-add642356e63.png)

From this layout we will create three vertical columns and three horizontal rows, and we can visualize it as this diagram:

![grid-lines-mockup--slack](https://cloud.githubusercontent.com/assets/626005/12065055/541c987c-afd9-11e5-8214-a2c7e0f91804.png)

We will start with the layout HTML code:

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

```scss
.app-layout {
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 250px 1fr;
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

[Demo](http://codepen.io/ahmadajmi/pen/YwNrNG)

Using Named Areas

```scss
.app-layout {
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 250px 1fr;

  grid-template-rows: auto 1fr auto;
  grid-template-areas: "teams channels header"
                       "teams channels messages"
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

[Demo](http://codepen.io/ahmadajmi/pen/gPgGgR)

## Grid Layout Module vs Flexbox

Since many of us have used Flexbox before, one question would come to mind to say: When can I user Flexbox and when can I use the Grid Module?

There are a pretty good answers I read about the difference, one from [Tab Atkins], and the other one from [Rachel Andrew], which I find pretty useful.

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

If you want to get deeper into the Module, you can check these resources:

* [CSS Grid Layout Module - W3C Working Draft](http://www.w3.org/TR/css-grid-1/)
* [CSS Grid Layout Module Level 1 - Editor’s Draft](https://drafts.csswg.org/css-grid/)
* [Microsoft Grid Layout](https://msdn.microsoft.com/en-gb/library/hh772052.aspx)
* [CSS Grid Layout Examples](https://igalia.github.io/css-grid-layout/index.html)
* [Grid by Example](http://gridbyexample.com/)
* Follow [Rachel Andrew] for new updates and articles, she is doing a very good work regarding the Grid Module.

## Conclusion

This is the conclusion

[caniuse suppport]:http://caniuse.com/#feat=css-grid
[Block Formatting Context]:http://www.sitepoint.com/understanding-block-formatting-contexts-in-css/
[slack-image]:https://cloud.githubusercontent.com/assets/626005/10714425/eb63804a-7af7-11e5-91aa-11f3a8b718ad.png
[Polyfill]:https://github.com/FremyCompany/css-grid-polyfill

[Tab Atkins]:http://www.xanthir.com/blog/
[Rachel Andrew]:https://www.rachelandrew.co.uk/
