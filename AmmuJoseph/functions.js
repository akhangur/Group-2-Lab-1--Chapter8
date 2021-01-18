/* define functions here */
function calculateTotal(quantity, price)
{
    return quantity*price;
};
function outputCartRow(file, title, quantity, price, total){
    total=calculateTotal(quantity[0],price[0]);
    document.write("<table>");
    document.write("<tr>");
    document.write("<td><img src='images/"+file[0]+"'</td>");
    document.write("<td>"+title[0]+"</td>");
    document.write("<td>"+quantity[0]+"</td>");
    document.write("<td>"+price[0].toFixed(2)+"</td>");
    document.write("<td>"+total[0].toFixed(2)+"</td>");
    document.write("</tr>");
    document.write("</table>");
};
        
