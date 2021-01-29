/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

for(var i=0;i<3;i++)                                  // to display each rows in the web page
{
   outputCartRow(filenames, titles, quantities, prices, calculateTotal());
}
var subtotal=findSub(quantities,prices);              // call function findSub(...) to calculate subtotal
var tax=findTax(subtotal);                            //call function findTax(...) to calculate tax
var ship=findShipping(subtotal);                   //call function findShipping(...) to calculate shipping cost
var grandtotal=findGrandTotal(subtotal, tax, ship);   //call function findGrandTotal(...) to calculate grand total
displayCalculations(subtotal,tax,ship,grandtotal);    //call function displayCalculations(...) to display the calculated values