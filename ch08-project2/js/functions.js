/* add in your functions here */
function outputCountryBox(name, continent, cities, photos)  //function generating markup for country box
{
    document.write("<div class='item'>"+
                        "<h2>"+name+"</h2>"+
                        "<p>"+continent+"</p>");
                        outputCities();                    
                        outputPhotos();                     
                        document.write("<button>Visit</button>"+
                    "</div>");
    function outputCities()                                 // function to generate markup for city box
    {
        document.write("<div class='inner-box'>"+
                        "<h3>Cities</h3>"+
                        "<ul>");
        for(var i=0;i<cities.length;i++)
        document.write("<li>"+cities[i]+"</li>");
        document.write("</ul></div>");
    }
    function outputPhotos()                                 // function to generate markup for photo box
    {
        document.write("<div class='inner-box'>"+
                        "<h3>Popular Photos</h3>");
        for(var i=0;i<photos.length;i++)
        document.write("<img src=images/"+photos[i]+".jpg class='photo'>");
        document.write("</div>");
    }
   
}