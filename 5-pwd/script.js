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

        divpopup.id = "popup";
        modalpop.id = "modalpop";
        
        main.appendChild(modalpop);
        
        divpopup.appendChild(h2);
        h2.appendChild(document.createTextNode("Imageviewer"));
        

        // Skapar X-knapp.
        var close = document.createElement("button");
        close.appendChild(document.createTextNode("X"));
        divpopup.appendChild(close);
        // Slänger slutligen in hela popupen efter i main.
        main.parentNode.insertBefore(divpopup, main.nextSibling);
        
        close.onclick = function()
        {
            divpopup.remove();
            modalpop.remove();
        };
    }
}
window.onload = pwd.init;