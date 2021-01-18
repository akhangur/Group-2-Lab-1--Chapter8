/* define functions here */
var calculateTotal=function(quantity, price) {
    return quantity * price; 
    };   
function outputCartRow(file, title, quantity, price, total) {    
    total = calculateTotal(quantity[i], price[i]);
    document.write("<tr>");
    document.write("<td><img src='images/" + file[i] + "'</td>");
    document.write("<td>" + title[i] + "</td>");
    document.write("<td style='text-align:center;'>" + quantity[i] + "</td>");
    document.write("<td style='text-align:right;'> $" + price[i].toFixed(2) + "</td>");
    document.write("<td style='text-align:right;'> $" + total.toFixed(2) + "</td>");
    document.write("</tr>");
    };  
function findSub(quantity, price) {
    var sub = 0;
    for (var i = 0; i < price.length; i++) {    
        sub =sub + calculateTotal(quantity[i],price[i]);
        }
    return sub;
    };
        
function findTax(subTotal){
    return subTotal * (10/100);           
    };
function findShipping(subTotal){      
    if (subTotal < 1000){    
        return 40;
        } 
        else {
        return 0;
        }
        }; 
function findGrandTotal(subTotal, tax, shipping){        
        return subTotal + tax + shipping;       
        };