/* add in your functions here */
function outputCountryBox(name, continent, cities, photos)
{
    document.write("<div class='item'>");
    document.write("<h2>"+name+"</h2>");
    document.write("<p>"+continent+"</p>");
    outputCities();
    outputPhotos();
    document.write("<button>Visit</button></div>");
    function outputCities(){
    document.write("<div class='inner-box'>");
    document.write("<h3>Cities</h3>");
    document.write("<ul>");
    for(i=0;i<cities.length;i++)
    document.write("<li>"+cities[i]+"</li>");
    document.write("</ul></div>");
    }
    function outputPhotos(){
    document.write("<div class='inner-box'>");
    document.write("<h3>Popular Photos</h3>");
    for(i=0;i<photos.length;i++)
    document.write("<img src=images/"+photos[i]+".jpg class='photo'>");
    document.write("</div>");
    }

}