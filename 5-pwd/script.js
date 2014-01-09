"use strict";
var pwd =
{
    
    
    
    
    init: function()
    {
        
    var popup = document.getElementById("newpopup");
    
     popup.onclick = function(){
          {
                
            pwd.popupWindow();
            return false;
          }
          
    
    
    
    
     }
    
},
// Modal-popupfönster som bekräftar köpet en gång till.
    popupWindow: function(){
                        
        // Skapar de olika elementen som representerar popupfönstret.
        var main = document.querySelector("#container");
        var modalpop = document.createElement("div");
        var divpopup = document.createElement("div");
        var h2 = document.createElement("h2");
        var divpopupbild = document.createElement("div");
        var divtop = document.createElement("div");
        var img = document.createElement("img");
        
        console.log(divpopup);

        divpopup.id = "popup";
        modalpop.id = "modalpop";
        divpopupbild.id ="divpopupbild";
        divtop.id = "divtop";
        img.id = "load";
        h2.id ="h2";
        main.appendChild(modalpop);
         
        
        
        
        img.setAttribute("src", "pics/ajax-loader.gif");
        divtop.appendChild(h2);
        h2.appendChild(document.createTextNode("Imageviewer"));
        
        
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
          
            console.log("hej",imagesarray);
            console.log(divpopup);
            img.parentNode.removeChild(img);
        for(var i = 0; i<imagesarray.length; i++)
        {
           changeimage(imagesarray,i);
            
            
        }
        };
        var changeimage = function(imagesarray,i)
        {
             var klickimg = document.createElement("a")
            klickimg.setAttribute("href","#");
            var loadedimg = document.createElement("img");
            klickimg.className = "atag";
            loadedimg.className = "imgtag";
            klickimg.id ="atagg";
            loadedimg.id="imgtagg";
            klickimg.appendChild(loadedimg);
            divpopup.appendChild(klickimg);
            loadedimg.setAttribute("src", imagesarray[i].thumbURL);
            klickimg.onclick = function()
            {
                loadedimg.setAttribute("src",imagesarray[i].URL)
            }
        }
        
        
        
        new AjaxCon(url,myCallback);
        
        close.onclick = function()
        {
            divpopup.remove();
            modalpop.remove();
            divtop.remove();
        };
       
        
        
        
        //img.remove();
        
        
    },
    

}
window.onload = pwd.init;