/* define functions here */
var calculateTotal=function(quantity, price)                            //a function to generate total 
{
    return quantity * price; 
};   

function outputCartRow(file, title, quantity, price, total)             //a function to display rows of table
{    
    total = calculateTotal(quantity[i], price[i]);
    document.write("<tr>"+
                        "<td><img src='images/" + file[i] + "'</td>"+
                        "<td>" + title[i] + "</td>"+
                        "<td style='text-align:center;'>" + quantity[i]+ "</td>"+
                        "<td style='text-align:right;'> $" + price[i].toFixed(2) + "</td>"+
                        "<td style='text-align:right;'> $" + total.toFixed(2) + "</td>"+
                   "</tr>");
}
function displayCalculations(subtotal,tax,ship,grandtotal)             //a function to display subtotal, tax, shipping and grand total
{
    document.write("<tr class='totals'>"+
                        "<td colspan='4'>Subtotal</td>"+
                        "<td>$" + subtotal.toFixed(2)+"</td>"+
                    "</tr>"+
                    "<tr class='totals'>"+
                        "<td colspan='4' id='tax'>Tax</td>"+
                        "<td>$" + tax.toFixed(2)+"</td>"+
                    "</tr>"+
                    "<tr class='totals'>"+
                        "<td colspan='4'>Shipping</td>"+
                        "<td>$" + ship.toFixed(2)+"</td>"+
                    "</tr>"+
                    "<tr class='totals focus'>"+
                        "<td colspan='4'>Grand Total</td>"+
                        "<td>$" + grandtotal.toFixed(2)+"</td>"+
                    "</tr>");
                   
} 

function findSub(quantity, price)                                   //a function to calculate subtotal
{
    var sub = 0;
    for (var i = 0; i < price.length; i++) 
    {    
        sub =sub + calculateTotal(quantity[i],price[i]);
    }
    return sub;
};
        
function findTax(subTotal)                                      // a function to calculate tax
{
    return subTotal * (10/100);           
};

function findShipping(subTotal)                                 // a function to calculate shipping cost
{      
    if (subTotal <= 1000)
    {    
        return 40;
    } 
    else 
    {
        return 0;
    }
}; 

function findGrandTotal(subTotal, tax, shipping)            // a function to calculate grand total
{        
    return subTotal + tax + shipping;       
};