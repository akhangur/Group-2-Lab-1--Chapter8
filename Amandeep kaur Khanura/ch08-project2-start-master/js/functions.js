/* add in your functions here */
function outputCountryBox(name,continent,cities,photos)
{

   document.write("<div class='item'>");  
   document.write( "<h2>"+name+"</h2>");
   document.write("<p>"+continent+"</p>");
   document.write("<div class='inner-box'>");
   document.write("<h3>Cities</h3>");
   document.write("<ul>");
   for(i=0;i<cities.length;i++)
   document.write("<li>"+cities[i]+"</li>");
   
   document.write("<ul>");
   document.write("</div>");
   document.write("<div class='inner-box'>");
   document.write("<h3>Popular Photos</h3>")

   for(j=0;j<photos.length;j++)
   
   document.write("<img src='images/"+photos[j]+".jpg' class='photo'>");
   document.write("</div>");
   document.write("<button>Visit</button>");
   document.write("</div>");

}