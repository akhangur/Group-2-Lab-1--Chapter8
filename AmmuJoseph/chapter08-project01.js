/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

for(var i=0;i<3;i++){
   outputCartRow(filenames, titles, quantities, prices, calculateTotal());
}
var subtotal=findSub(quantities,prices);
var tax=findTax(subtotal);
var ship=findShipping(subtotal);
var grandtotal=findGrandTotal(subtotal, tax, ship);