"use strict";
var pwd =
{
    
    
    
    
    init: function()
    {
      document.getElementById("date").innerHTML = formatAMPM();

        function formatAMPM() {
        var date = new Date();
        var hours = date.getHours();
        var days = date.getDay(); 
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
        return strTime;
        }   
    var popup = document.getElementById("newpopup");
    
     popup.onclick = function(){
          {
                
            pwd.popupWindow();
            return false;
          }
          
    
    
    
    
     }
    
},
// Modal-popupfönster som visar bilder.
    popupWindow: function(){
                        
        // Skapar de olika elementen som representerar popupfönstret.
        var main = document.querySelector("#container");
        var modalpop = document.createElement("div");
        var divpopup = document.createElement("div");
        var h2 = document.createElement("h2");
        var divpopupbild = document.createElement("div");
        var divtop = document.createElement("div");
        var img = document.createElement("img");
        var popupimg = document.createElement("img");
        var clock = document.createElement("div");
        
        console.log(divpopup);

        divpopup.id = "popup";
        modalpop.id = "modalpop";
        divpopupbild.id ="divpopupbild";
        divtop.id = "divtop";
        img.id = "load";
        h2.id ="h2";
        popupimg.id ="popupimg";
        clock.id ="clock";
        main.appendChild(modalpop);
        main.appendChild(clock);
         
        
        
        
        img.setAttribute("src", "pics/ajax-loader.gif");
        popupimg.setAttribute("src","pics/thumbnail.gif");
        divtop.appendChild(h2);
        h2.appendChild(document.createTextNode("Image Viewer"));
        divtop.appendChild(popupimg);
        
        
        divpopup.appendChild(img);
        divpopup.appendChild(divpopupbild);
        console.log(img);

        // Skapar X-knapp.
        var close = document.createElement("button");
        divtop.appendChild(close);
        close.appendChild(document.createTextNode("X"));
        close.id = "close";
        
        // Slänger slutligen in hela popupen efter i main.
        main.parentNode.insertBefore(divpopup, main.nextSibling);
        main.parentNode.insertBefore(divtop, main.nextSibling);
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        
        
        var myCallback = function(data){
            var imagesarray = [];
            imagesarray = JSON.parse(data);
            img.parentNode.removeChild(img);
            var thumbSize = maxWidthHeightThumb(imagesarray);
            console.log(thumbSize);
            var thumbHeight = thumbSize.height;
            console.log("höjd",thumbHeight);
            var thumbWidth = thumbSize.width;
            console.log("bredd",thumbWidth);
        for(var i = 0; i<imagesarray.length; i++)
        {
           changeimage(imagesarray,i, thumbWidth,thumbHeight);
           
            
        }
        };
        
        var changeimage = function(imagesarray,i,thumbWidth,thumbHeight)
        {
             var klickimg = document.createElement("a");
             console.log("bredd2",thumbWidth,"höjd2", thumbHeight);
            klickimg.setAttribute("href","#","width",thumbWidth,"height", thumbHeight);
            var loadedimg = document.createElement("img");
            klickimg.className = "atag";
            loadedimg.className = "imgtag";
            klickimg.id ="atagg";
            loadedimg.id="imgtagg";
            klickimg.appendChild(loadedimg);
            divpopup.appendChild(klickimg);
            loadedimg.setAttribute("src", imagesarray[i].thumbURL);
            klickimg.style.height = thumbHeight + "px";
            klickimg.style.width = thumbWidth + "px;";
            
            klickimg.onclick = function()
            {
                var body = document.getElementById("body");
                body.style.backgroundImage = "url(" + imagesarray[i].URL + ")";
            }
        }
        var maxWidthHeightThumb = function(imagesarray)
        {
            var width = 0;
            var height = 0;
            for(var i = 0; i<imagesarray.length; i++)
            {
                if(imagesarray[i].thumbWidth > width)
                {
                    width = imagesarray[i].thumbWidth;
                }
            
                if(imagesarray[i].thumbHeight > height)
                {
                    height = imagesarray[i].thumbHeight;
                }
            }
            return{
                width:width,
                height:height
            };
            
        }
        
        
        
        
        new AjaxCon(url,myCallback);
        
        close.onclick = function()
        {
            divpopup.remove();
            modalpop.remove();
            divtop.remove();
        };
       
        
        
    }
    

}
window.onload = pwd.init;