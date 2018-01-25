/* WTM: If below were blank, it would be called an
"array literal" ... just a blank shopping list. */

var shoppingList = [ /* First bracket stays to right of equal sign */
    'carrots', /* Strings (word-based shopping list items) don't have to be on a new line for each item ... this is just a common layout for arrays ... they can all be on one line as long as you don't have too many strings on one life ... it just gets messy quickly. */
    'milk', /* NOTE: commas, not semicolons, after each array item! */
    'eggs', /* It's 'eggs' because it's a string. To add number, instead, for example, you'd just type ... 1, ... no single apostrophe as single apostrophe only gets used for array items that are strings */
]; /* Last bracket goes here to end the shopping list */

console.log (shoppingList [0]); /* You can open index.html in Chrome, hit CTRL+SHIFT+J for console, and "carrots" will be printed to the console! */
console.log (shoppingList [1]); /* Console will show milk as it's in position 1 on the array. */
console.log (shoppingList [2]); /* Console will show eggs. */
/* console.log (shoppingList [3]) <-- This will result in "undefined" getting printed to the console because there is no third item in shoppingList. "Undefinied" is synonymous with "nothing there"*/