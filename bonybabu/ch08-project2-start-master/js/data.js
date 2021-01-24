/* define your array of object literals here */
var countries=[
    {name:"Canada",continent:"North America",cities:["Calgary","Montreal","Toronto"],photos:["canada1","canada2","canada3"]},
    {name:"United States",continent:"North America",cities:["Boston","Chicago","New York","seattle","Washington"],photos:["us1","us2"]},
    {name:"Italy",continent:"Europe",cities:["Florence","Milan","Naples","Rome"],photos:["italy1","italy2","italy3","italy4","italy5","italy6"]},
    {name:"Spain",continent:"Europe",cities:["Almeria","Barcelona","Madrid"],photos:["spain1","spain2"]}];
    for(k=0;k<4;k++)
    outputCountryBox(countries[k].name,countries[k].continent,countries[k].cities,countries[k].photos);