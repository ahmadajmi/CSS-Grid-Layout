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