## Outline

* Introduction
* Overview (What is CSS Grid Layout Module?)
* Browser Support
* Quick Example (Grid Layout Example)
* Concepts (Grid Layout Module Concepts)
* Using grid-template-areas
* Source Order
* Responsive Design
* Practical Example (Slack Example)
* Grid Layout Module vs Flexbox
* Resources
* Conclusion

Back in the old days of creating web pages, we used HTML tables to create page layout, then we started to use floats with clearfix, and box-sizing. Since we started to create more complex web applications that requires gets more complex layouts, we need a new and native support for creating complex layouts but a new solution for creating layouts comes with [CSS Grid Layout Module](https://drafts.csswg.org/css-grid-1/).

As the initial motivation behind Grid layout is to make layout creation easily, we no longer need to implement layouts using HTML tables, floats and other CSS hacks like clearfix, the Grid Module will be the native support for creating grids in the browser.

Since there is a clear diff between the Flexbox and the Grid, combine the two examples together in the slack demo

Grid layout contains features targeted at web application authors.
The grid can be used to achieve many different layouts.
It excels at dividing up space for major regions of an application, or defining the relationship in terms of size, position, and layer between parts of a control built from HTML primitives.

Like tables, grid layout enables an author to align elements into columns and rows, but unlike tables, grid layout doesn’t have content structure, and thus enables a wide variety of layouts not possible with tables.
For example, the children of a grid container can position themselves such that they overlap and layer similar to positioned elements.

In addition, the absence of content structure in grid layout helps to manage changes to layout by using fluid and source order independent layout techniques.
By combining media queries with the CSS properties that control layout of the grid container and its children, authors can adapt their layout to changes in device form factors, orientation, and available space, without needing to alter the semantic nature of their content.

A very interesting feature of the Grid Module is the ability to adapt the content layout to changes in different devices and viewports without changing the semantic of the content.

#### The Explicit Grid

Defined by 3 properties

`grid-template-rows` is a space separated track list which includes line names and sizing functions of the grid rows.

`grid-template-columns` specifies the column information as for rows property

`grid-template-areas` specifies named areas which are not associated with any particular grid item. Also useful to visualize the grid

## Grid Layout Example
and will create a new **grid formatting context** for it's contents. The grid formatting context is the same as the [Block Formatting Context], except that the grid layout is used instead of the block layout.


Columns are for:
* Teams
* Channels
* Header, Messages, and Input

Rows:
* Header
* Messages
* Input

You may noticed that we have repeated Header, messages, and Input, as they are interconnected sections, we can visualize it as this diagram:
