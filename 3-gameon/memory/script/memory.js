"use strict";


var Memory =
{
    
    rows: 4,
    cols: 4,
    memoryArray: [],
    checkArray: [],
    clickcounter: 0,
    paircounter: 0,
    
    
    init: function(e)
    {
        Memory.memoryArray = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
        console.log(Memory.memoryArray);
        
        
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
    renderImages: function(id){
        var content = document.getElementById("content")
        var a =document.createElement("a");
        a.setAttribute("href", "#");
        var img =document.createElement("img");
        img.setAttribute("src", "pics/0.png");
        a.appendChild(img);
        content.appendChild(a);
        
       
        a.onclick = function()
        {
           
            
            if(Memory.clickcounter === 2){
                //Memory.myFunction;
                return;
                
            }
            
            Memory.flipp(id, img);
        }
        
    },
    flipp: function(id, img)
    {
        Memory.clickcounter++
        img.setAttribute("src", "pics/" + id + ".png");
        Memory.checkArray.push(img);
        
        if(Memory.checkArray.length === 2){
            console.log(Memory.checkArray[0].getAttribute("src")); 
            if(Memory.checkArray[0].getAttribute("src") === Memory.checkArray[1].getAttribute("src")){
                console.log("lika");
                Memory.paircounter++;
                var pair_count = document.getElementById("counter");
                pair_count.innerHTML = "<p>" + "Antal Par:" + "</p>"+ "<p>" + Memory.paircounter + "</p>";
                Memory.checkArray.length = 0;
                
            }else{
                setTimeout(function() {
                    console.log(Memory.checkArray);
                    Memory.checkArray[0].setAttribute("src", "pics/0.png");
                    Memory.checkArray[1].setAttribute("src", "pics/0.png");
                    Memory.checkArray.length = 0;
                }, 1000);
                
                
            }
            if(Memory.paircounter === Memory.memoryArray.length/2)
                {
                    var div = document.getElementById("counter");
                     var ptagg = document.createElement("p");
                     ptagg.innerHTML = "Du vann!";
                     div.appendChild(ptagg);
                }
            Memory.clickcounter = 0;
            
            
        }
        
       
    }
    
}
window.onload = Memory.init;