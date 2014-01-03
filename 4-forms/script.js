"use strict";
var Forms =
{
 
     fornamn: false,
     efternamn: false,
     postnummer: false,
     emailadress: false,

 
init: function(id)
{

     var submit =  document.getElementById("genomfor_kop");
     var fname = document.getElementById("Fornamn");
     var Postadress = document.getElementById("Postadress");
     var Email = document.getElementById("mail");


        var sname = document.getElementById("Efternamn");

      /*
     -------FÖRNAMN-------------
     */
     
     fname.onblur = function()
     {
         var corrfname = /^\s*\S+.*/;
         var Validatingfname = fname.value.match(corrfname);
         

         
         if(Validatingfname === null)
         {
            fname.classList.add("Error");
            fname.classList.remove("OK");
                        Forms.fornamn = false;
                        return Forms.fornamn;


         }
         else if(Validatingfname.length > 0)
         {
            fname.classList.remove("Error");
            fname.classList.add("OK");
            Forms.fornamn = true;
                                                                                     console.log(Forms.fornamn)

            return Forms.fornamn;
         }
     };
     

        sname.onblur = function(){
        var corrsname = /^\s*\S+.*/;
     
        var Validatingsname = sname.value.match(corrsname);

            if(Validatingsname === null)
            {
             sname.classList.add("Error");
             sname.classList.remove("OK");
                                         Forms.efternamn = false;
                                                                     return Forms.efternamn;

            }
      
            else if(Validatingsname.length > 0)
            {
                sname.classList.remove("Error");
                sname.classList.add("OK");
                            Forms.efternamn = true;
                                                                                                     console.log(Forms.efternamn)

                            return Forms.efternamn;

            }
        }  
    
     
     /*
     -------Postadress-------------
     */
     
     //Postadress = Postadress.value;
     
        Postadress.onblur = function(){
            
            var Postadressvalue = Postadress.value;
            var corrPostdress = /^\d{5}$/;

            
            var replacedpostadress = Postadressvalue.replace(/\D/g, "");
            
            Postadress.value = replacedpostadress;
            
            

            if(!corrPostdress.test(Postadress.value))
            {   
                Postadress.classList.add("Error");
                Postadress.classList.remove("OK");
                                            Forms.postnummer = false;
                                                                                                         return Forms.postnummer;


            }
            if(corrPostdress.test(Postadress.value))
            {
                Postadress.classList.remove("Error");
                Postadress.classList.add("OK");
                           Forms.postnummer = true;
                                                                                                    console.log(Forms.postnummer)

                                                                                         return Forms.postnummer;

            }   
     }
     
     /*
     -------Email-------------
     */
     
        Email.onblur = function(){
            var corrEpost = /\S+@\S+\.\S+/;
            
            if(!corrEpost.test(Email.value))
            {
                 Email.classList.add("Error");
                 Email.classList.remove("OK");
                                                             Forms.emailadress = false;
                                                                                                                          return Forms.emailadress;


            }
            if(corrEpost.test(Email.value))
            {
                Email.classList.remove("Error");
                Email.classList.add("OK");
                                                             Forms.emailadress = true;
                                                                         console.log(Forms.emailadress)

                                                             return Forms.emailadress;
            
            }
        }





          submit.onclick = function(){
          if((Forms.fornamn && Forms.efternamn && Forms.postnummer && Forms.emailadress) === true){
                console.log(fname)
                console.log(sname)
                console.log(Email)
                console.log(Postadress)
            Forms.popupWindow(fname, sname, Postadress, Email);
            return false;
          }
          else{
              return false;
          }
      }
},
      
      
        // Modal-popupfönster som bekräftar köpet en gång till.
    popupWindow: function(fname, sname, Postadress, Email){
                        console.log(fname)
                console.log(sname)
                console.log(Email)
                console.log(Postadress)
        // Skapar de olika elementen som representerar popupfönstret.
        var main = document.querySelector("#container");
        var modalpop = document.createElement("div");
        var divpopup = document.createElement("div");
        var h2 = document.createElement("h2");
        
        var fname1 = document.createElement("span");
        var sname1 = document.createElement("span");
        var Postadress1 = document.createElement("span");
        var Email1 = document.createElement("span");

        divpopup.id = "popup";
        modalpop.id = "modalpop";
        
        main.appendChild(modalpop);
        
        divpopup.appendChild(h2);
        h2.appendChild(document.createTextNode("Vänligen bekräfta ditt köp"));
        
        // Skapar textnoder för varje input-element från elementet name-attribut.
        fname1.appendChild(document.createTextNode("Förnamn: "+fname.value));
        sname1.appendChild(document.createTextNode("Efternamn: "+sname.value));
        Postadress1.appendChild(document.createTextNode("Postnummer: "+Postadress.value));
        Email1.appendChild(document.createTextNode("E-mail: "+Email.value));
        fname1.className = "lname";
        sname1.className = "lname";
        Postadress1.className = "lname";
        Email1.className = "lname";

        divpopup.appendChild(fname1);
        divpopup.appendChild(sname1);
        divpopup.appendChild(Postadress1);
        divpopup.appendChild(Email1);

        // Skapar en Bekräfta och Avbryt-knapp.
        var submit2 = document.createElement("button");
        var close = document.createElement("button");
        submit2.appendChild(document.createTextNode("Bekräfta"));
        close.appendChild(document.createTextNode("Avbryt"));
        divpopup.appendChild(submit2);
        divpopup.appendChild(close);
        // Slänger slutligen in hela popupen efter i main.
        main.parentNode.insertBefore(divpopup, main.nextSibling);
        
        submit2.onclick = function() 
        {
            document.getElementById("form").submit();
            document.getElementById(submit2).disabled = true;
        };
        close.onclick = function()
        {
            divpopup.remove();
            modalpop.remove();
        };
    }
}
  
window.onload = Forms.init;
