# CSS Grid Layout

## What is CSS Grid Layout

> This CSS module defines a two-dimensional grid-based layout system, optimized for user interface design. In the grid layout model, the children of a grid container can be positioned into arbitrary slots in a flexible or fixed predefined layout grid.

The core idea about the Grid is to partition a web page into a defined set of rows and columns, then it gives us the ability to position and size those partitions based on the rows and columns we just created.

The initial motivation behind Grid layout is to improve and making layout creation very easy to do and to understand, so we no longer need to do the old ways like HTML tables, floats and clearfix.

## Browser Support

Before we can see an example, we need to talk about the current browser support and how to enable this feature in the current browsers.

The first proposal of the Grid developed my Microsoft, so that it's implemented in IE10.

##### Google Chrome

Go to `chrome://flags` URL, then scroll to `Enable experimental Web Platform features` flag and then enable it, then you will be asked to Relaunch Chrome.

![chrome-config](https://cloud.githubusercontent.com/assets/626005/9566281/bcbb9d78-4eff-11e5-8784-76400fce453e.jpg)

##### Firefox
Go to `about:config`, then search for `layout.css.grid.enabled` then double click or enter to activate it.

![firefox-config](https://cloud.githubusercontent.com/assets/626005/9566280/bcb081b8-4eff-11e5-8f78-bce7fa0a6ded.jpg)

## Example

Let's see a starter example to see the power of the Grid Module, imagine we need to create a page with full height 4 columns.

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
  
  /* Divide the page into 4 columns each one is 25% */
  grid-template-columns: 25% 25% 25% 25%;
  
  /* Create a one row and set the height be 100vh */
  grid-template-rows: 100vh;
}
```

The `grid-template-columns` responsibility is to divide the page into columns, in our case we did a 4 columns each one with 25% of the page width.

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

We can also achieve the above example in small screens by wrapping the code inside a media query

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

A very interesting feature of the Grid Module is the ability to rearrange the page partitions visually without without editing HTML or we can call it the source order. Imagine in the example about for small screens we want to bring the messages section to be the first section, so we need to move it to the first column in the first row.

![screen shot 2015-08-29 at 12 48 29](https://cloud.githubusercontent.com/assets/626005/9561604/55085a3a-4e4c-11e5-9f86-1220f260bb16.png)

``` css
@media screen and (max-width: 1024px) {
  
  /* ....  */

  /* Set the message position in the column 1 and row 1 */
  .messages { grid-column: 1; grid-row: 1; }
}
```
Another use case for the source order is the order of the sidebar when it's position on the left on the desktop and the order of HTML, in mobile we can shift it to the bottom.

![screen shot 2015-09-01 at 8 46 52 am](https://cloud.githubusercontent.com/assets/626005/9597835/093d916a-5086-11e5-97f2-c8e7da9ad672.png)

#### using grid-template-areas

Another option is to sue the `grid-template-areas` to divid the page sections into areas, each area with a new

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

## Example

Take a real world example

Try also the example of sticky footer

## Conclusion


#### Drafts
A very interesting feature of the Grid Module is the ability to adapt the content layout to changes in different devices and viewports without changing the semantic of the content.

[caniuse suppport]:http://caniuse.com/#feat=css-grid
[CSS Grid Layout Module Level 1]:https://drafts.csswg.org/css-grid/
[Grid by Example]:http://gridbyexample.com/
