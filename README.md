CSS Grid Layout
-----------------

## What is CSS Grid Layout

> This CSS module defines a two-dimensional grid-based layout system, optimized for user interface design. In the grid layout model, the children of a grid container can be positioned into arbitrary slots in a flexible or fixed predefined layout grid.

The core idea about the Grid is to partition a web page into a defined set of rows and columns, then it gives us the ability to position and size those partitions based on the rows and columns.

The initial motivation behind the Flexbox and Grid layout is to replace float and table layout hacks.

Write about the troubles and the current problems about creating a layout using floats, clearfix and so on and how CSS Grid layout can help.

## Browser Support

Before we can see an example, we need to talk about the current browser support and how to enable in the current browsers.

The first proposal of the Grid developed my Microsoft, so that it's implemented in IE10. 

##### Google Chrome

Go to `chrome://flags` URL, then scroll to Enable experimental Web Platform features option and then enable it, then you will be asked to Relaunch Chrome.

![screen shot 2015-08-29 at 1 10 55 pm](https://cloud.githubusercontent.com/assets/626005/9561658/8f9dedb0-4e4f-11e5-819c-46c6fffacfac.png)

##### Firefox
Open a new tab and going to the [about:config](about:config), then search for `layout.css.grid.enabled` then double click or enter to activate it.

![screen shot 2015-08-29 at 1 10 31 pm](https://cloud.githubusercontent.com/assets/626005/9561657/8f619fd6-4e4f-11e5-9be3-5dfbcd1575d8.png)

Let's see a simple example, imagine we need to create a page with full height 4 columns.

![screen shot 2015-08-29 at 12 33 21](https://cloud.githubusercontent.com/assets/626005/9561556/89701008-4e4a-11e5-9137-12e271ddcf76.png)

``` html
<div class="grid">
  <div class="tweets box">Tweets</div>
  <div class="replies box">Replies</div>
  <div class="search box">Search</div>
  <div class="messages box">Messages</div>
</div>
```

``` css
.grid {
  /* Set up the display property to grid */
  display: grid;
  /* Divide the page into 4 columns each one is 25% */
  grid-template-columns: 25% 25% 25% 25%;
  /* Create a one row and set the height 10 be 100vh */
  grid-template-rows: 100vh;
}
```

In small screen we can changes this a little bit to show the 4 boxes in two columns and two rows as.

![screen shot 2015-08-29 at 12 34 18](https://cloud.githubusercontent.com/assets/626005/9561557/899242fe-4e4a-11e5-8f35-630fce7b84e6.png)

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

A very interesting feature of the Grid Module is the ability change the order of the page partitions without changing the semantic of the content, imagine in the example about for small screens we want to bring the search section to be the first section in the first column and the first row.

![screen shot 2015-08-29 at 12 48 29](https://cloud.githubusercontent.com/assets/626005/9561604/55085a3a-4e4c-11e5-9f86-1220f260bb16.png)

``` css
@media screen and (max-width: 1024px) {
  
  /* ....  */

  /* Set the message position in the column 1 and row 1 */
  .messages { grid-column: 1; grid-row: 1; }
}
```

![screen shot 2015-08-27 at 11 35 05 am](https://cloud.githubusercontent.com/assets/626005/9517355/d562521a-4caf-11e5-98ef-e1311c15f5f1.png)
![screen shot 2015-08-27 at 11 35 29 am](https://cloud.githubusercontent.com/assets/626005/9517356/d5700e64-4caf-11e5-882f-3088a1b02700.png)

## What Is CSS Grid Layout in More Details

## Example

Take a real world example

Try also the example of sticky footer

## Conclusion


#### Drafts
A very interesting feature of the Grid Module is the ability to adapt the content layout to changes in different devices and viewports without changing the semantic of the content.

[CSS Grid Layout Module Level 1]:https://drafts.csswg.org/css-grid/
[Grid by Example]:http://gridbyexample.com/