"use strict";


var Memory =
{
    /*Skapar Arrayer för kolumner och rader och anger dessa. */
    rows: 4,
    cols: 4,
    memoryArray: [],
    checkArray: [],
    clickcounter: 0,
    paircounter: 0,
    firstClick: null,
    
    
    init: function(e)
    {
        /*Slumpar bilder på kolumner och rader */
        Memory.memoryArray = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
       
        /*Hämtar id från html dokumentet. Går igenom arrayerna cols och row. Skickar sedan
        vidare memoryArray till renderimages tillsammans med räknaren.*/
        var content = document.getElementById("content");
        var counter = 0;
        for(var i = 0; i < Memory.rows; i++){
           
            for(var j = 1; j < Memory.cols+1; j++)
            {
                
                Memory.renderImages(Memory.memoryArray[counter]); 
               counter++;
            }
            
            var br = document.createElement("br");
            content.appendChild(br);
            
            
        }
       
        
    },
    /*Skapar a tagg och img tagg och lägger img tagg i a taggen. */
    renderImages: function(id){
        var content = document.getElementById("content");
        var a =document.createElement("a");
        var img =document.createElement("img");
        a.setAttribute("href", "#");
        img.setAttribute("src", "pics/0.png");
        a.appendChild(img);
        content.appendChild(a);
        
        /*onklick funktion på a taggen*/
        a.onclick = function()
        {
            
        /*Om den klickade bilden är lika med bilden 0 så gör följande. */
        if(this.getElementsByTagName("img")[0].getAttribute("src") === "pics/0.png") { 
            
            /*Om klickräknaren är likamed eller större än 2, så nollställ klickräknaren. */
            if(Memory.clickcounter >= 2){
                    
                    Memory.clickcounter = 0;
                    
            }
            
            /*Om klickräknaren likamed 0 så gör det aktuella klicket till det första. */
            if(Memory.clickcounter === 0){
                Memory.firstClick = this;
            }
            /*Om det aktuella är lika med första klicket och klickräknaren är större än 0 så returnera falskt.
            annars kör Memory flipp funktionen*/
            if(this == Memory.firstClick && Memory.clickcounter > 0){
                    
                return false;
            }
                
                Memory.flipp(id, img);
            }
        };
        
    },
    /* Flipp funktion som vänder på brickorna. */
    flipp: function(id, img)
    {
        /*Räknar upp klickräknaren med 1 och sätt sedan attribut på img taggen och sedan lägg till img taggen i checkarray arrayet. */
        Memory.clickcounter++;
        img.setAttribute("src", "pics/" + id + ".png");
        Memory.checkArray.push(img);
        
        /*Om längden på checkarray är likamed 2 gå vidare. */
        if(Memory.checkArray.length === 2){
            
            /*Om första och andra värdet i checkarray har samma källa öka par räknaren med 1.
            Lägg sedan till dessa i en html tagg och sedan nollställ checkarray.*/
            if(Memory.checkArray[0].getAttribute("src") === Memory.checkArray[1].getAttribute("src"))
            {  
                Memory.paircounter++;
                var pair_count = document.getElementById("counter");
                pair_count.innerHTML = "<p>" + "Antal Par:" + "</p>"+ "<p>" + Memory.paircounter + "</p>";
                Memory.checkArray.length = 0;
                
            }
            /*Kör funktionen flipp back och nollställ checkarray. */
            else{
                
                Memory.flippBack(Memory.checkArray[0], Memory.checkArray[1]);
                Memory.checkArray.length = 0;
                
            }
            /*Om parräknaren likamed memoryarray delat på 2 så hämta id och sedan skriv ut detta i html dokumentet. */
            if(Memory.paircounter === Memory.memoryArray.length/2)
            {
                var div = document.getElementById("counter");
                var ptagg = document.createElement("p");
                ptagg.innerHTML = "Du vann!";
                div.appendChild(ptagg);
            }
            
            
        }
       
    
    },
    /*Flippar tillbaks brickor om dessa inte är samma efter en sekund. */
    flippBack: function(pic1, pic2)
    {
        setTimeout(function() {
                    pic1.setAttribute("src", "pics/0.png");
                    pic2.setAttribute("src", "pics/0.png");
                }, 1000);
    }
};
window.onload = Memory.init;