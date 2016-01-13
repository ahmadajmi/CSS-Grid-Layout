# Introduction to CSS Grid Layout Module

Back to the old days of creating web pages, we used HTML tables to create page layout, and then we started to use some CSS properties like floats combined with clearfix, and box-sizing. Another option is to use a CSS framework to help us create the complex layouts we need.

As Web Applications becomes more and more complex in different domains including layouts and responsive design, we need as web developers a more natural, and native way to do complex layouts easily without any hacks and workarounds. Fortunately an exciting new  solution for creating layouts comes with the [CSS Grid Layout Module](http://www.w3.org/TR/css-grid-1/).

In this introduction we will discover the new **Grid Module**, the current browser support, and how it works with some practical examples.

## What is CSS Grid Layout Module?

The core idea behind the Grid Layout is to divide the web page into columns and rows, and then we have the ability to position and size the building block elements based on the rows and columns we have created in terms of size, position and layer.

The Grid also gives us a flexible way to change the layout elements position with only CSS without any change to the HTML structure, this also could be used with Media Queries to change the layout at different breakpoints.

## Browser Support

Before we can div more into the Grid, we need to talk about the current [browser support](http://caniuse.com/#feat=css-grid), and how we can enable it in the current browsers.

![browser-support](https://cloud.githubusercontent.com/assets/626005/12323536/bcc330f2-bac4-11e5-9468-a46994f3b7ce.jpg)

### Internet Explorer

Since the first proposal of the Grid developed by Microsoft, Internet Explorer 10 shipped with a ```-ms``` prefixed implementation. If we take a look at the image above, or at the [Can I Use](http://caniuse.com/#feat=css-grid) report, we can see that Internet Explorer 11, and the Edge browsers are also supported. In other browsers the Grid Layout is not supported by default, but we can enable it as we will see next.

### Blink Rendering Engine (Chrome, Opera)

Navigate to `chrome://flags` URL, look for `Enable experimental Web Platform features` flag, enable it, and then you will be asked to relaunch Chrome.

![support-chrome](https://cloud.githubusercontent.com/assets/626005/10864161/93b1a55c-7fed-11e5-806c-dbaac9e66a73.jpg)

It's recommended to use either Chrome or Opera with the article examples or your own next experimentations, as the [Blink](http://www.chromium.org/blink) engine has the [most updated implementations](http://gridbyexample.com/browsers/).

### Firefox

Navigate to `about:config` URL, search for `layout.css.grid.enabled` flag, then double click or press enter to toggle it to true for activation.

![support-firefox](https://cloud.githubusercontent.com/assets/626005/10864162/93bb055c-7fed-11e5-9777-d69d22c319c5.jpg)

### Polyfill

A [Polyfill] is also available to provide a working implementation of the Grid Module for current browsers.

## Grid Layout Example

Let's start with an example to see the power of the Grid Module, and then we will explain some new concepts in more details.

Imagine we want to create an application for Twitter with four full height columns layout (Tweets, Replies, Search, and Messages), something abstracted and similar to the screenshot below.

![basic-4-column-layout](https://cloud.githubusercontent.com/assets/626005/12036357/f7d0aeaa-ae4d-11e5-87d9-b61af7df781d.jpg)

Application HTML markup will be:

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

Demo: [4 columns layout using CSS Grid](http://codepen.io/ahmadajmi/pen/OMjdLG?editors=110)

Here is the explanation of what we've done in the previous CSS code:

1. Set the display property value to `grid`.
2. Divide the container element into four columns, and each one is `1fr` [(one fraction)](http://www.w3.org/TR/2011/WD-css3-values-20110906/#fr-unit) of the free space within the grid container.
3. Create one row, and set the height to be `100vh` (full viewport height).

The new Grid Module added a new value to the `display` property which is `grid`. The `grid` property is responsible for setting the `.app-layout` element to be a grid container, which also establishes a new grid formatting context for its contents, and this is the foundation property, which is required to start using the Grid.

The `grid-template-columns` specifies the width of each grid column within the Grid, and in our case it divides the `.app-layout` container to four columns, each one is `1fr` of the available space.

The `grid-template-rows` specifies the height of each grid row in the Grid, and in our example we only created one row to be `100vh`.

If wee need to create a layout with two columns and two rows, we can do:

``` css
.app-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50vh 50vh;
}
```

Demo: [4 boxes layout using CSS Grid](http://codepen.io/ahmadajmi/pen/OMjdLG?editors=110)

So this will give us a four boxes layout like:

![basic-4-column-2-rows-layout](https://cloud.githubusercontent.com/assets/626005/12037049/08932e74-ae54-11e5-8e97-1fb69aee3526.jpg)

## Grid Layout Module Concepts

After we have did our first example, there are some new concepts that we need to know for a better understanding the new Module. There are a lot of new concepts, we will only take a look at a few of them.

**Grid Item**

Grid items are the child elements of the Grid container, like `.tweets` and `.replies` elements.

**Grid Lines**

![grid-lines-mockup](https://cloud.githubusercontent.com/assets/626005/12065042/28d70cf6-afd9-11e5-9325-4c437236a621.png)

A Grid Line is a line exist on either side of a column or a row, and there are two sets of grid lines: one set defining columns (vertical axis), and another set defining rows (horizontal axis). We can refer to a grid line by a line number, or by an author-specified name, and we will get to this soon.

From the above screenshot that represents the first example, we did four columns each one is `1fr` which will give us five vertical lines, and we did one row, which will give us two horizontal lines.

Let's see how we can position a gird item inside the grid container in the two ways:

### Position Items by Using a Line Number

We can refer to the exact line number by using new properties like `grid-column-start` and `grid-column-end`, and then give theses properties the start line and the end line numbers.

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

Demo: [4 columns layout using CSS Grid - Search First](http://codepen.io/ahmadajmi/pen/PZKXVX?editors=110)

We have changed the layout structure with only CSS, and the markup is still as it is without any changes, this is a huge advantage of using the new Grid Module.

We can rearrange the layout of elements independent of their source order, so we can achieve the desired layout in different screen size, orientation. This is very useful because we will separate the markup from CSS and change everything from CSS without editing HTML markup anymore.

## Position Items by Using Named Areas

Another option to position an item is to use the `grid-template-areas` to divide the page sections into areas, each area with a specific name.

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

From this layout we will create three vertical columns, and three horizontal rows, and we can visualize it as:

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

Demo: [Slack layout using CSS Grid](http://codepen.io/ahmadajmi/pen/YwNrNG)

**Using Named Areas**

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

Demo: [Slack layout using CSS Grid - Named Areas](http://codepen.io/ahmadajmi/pen/gPgGgR)

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

If you want to get deeper into the Module, you can check these great resources:

* [CSS Grid Layout Module - W3C Working Draft](http://www.w3.org/TR/css-grid-1/)
* [CSS Grid Layout Module Level 1 - Editor’s Draft](https://drafts.csswg.org/css-grid/)
* [Microsoft Grid Layout](https://msdn.microsoft.com/en-gb/library/hh772052.aspx)
* [CSS Grid Layout Examples](https://igalia.github.io/css-grid-layout/index.html)
* [Grid by Example](http://gridbyexample.com/)
* Follow [Rachel Andrew] for new updates and articles, she is doing a great work regarding the Grid Module.

## Conclusion

Yes, the new Grid Module is awesome in different areas like: less code we have to write, the power of changing the layout only with CSS, responsive design, and I advice everyone to give it a try.

[caniuse suppport]:http://caniuse.com/#feat=css-grid
[Block Formatting Context]:http://www.sitepoint.com/understanding-block-formatting-contexts-in-css/
[slack-image]:https://cloud.githubusercontent.com/assets/626005/10714425/eb63804a-7af7-11e5-91aa-11f3a8b718ad.png
[Polyfill]:https://github.com/FremyCompany/css-grid-polyfill

[Tab Atkins]:http://www.xanthir.com/blog/
[Rachel Andrew]:https://www.rachelandrew.co.uk/
