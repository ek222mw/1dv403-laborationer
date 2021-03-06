"use strict";
var Forms =
{
     /*Skapar taggar som är falska. */ 
     fornamn: false,
     efternamn: false,
     postnummer: false,
     emailadress: false,

 
init: function(id)
{
     /*Hämtar iden på taggar. */
     var submit =  document.getElementById("genomfor_kop");
     var fname = document.getElementById("Fornamn");
     var Postadress = document.getElementById("Postadress");
     var Email = document.getElementById("mail");
     var sname = document.getElementById("Efternamn");

      /*
     -------FÖRNAMN-------------
     */
     
     /*Skapar en blur funktion i inmatningsfältet */
     fname.onblur = function()
     {
         /*Lägger till ett regex som gör att du måste mata in något i fältet annars blir det rött. */
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
            return Forms.fornamn;
         }
     };
     
    /*Skapar en blur funktion i inmatningsfältet */
    sname.onblur = function()
    {
        /*Lägger till ett regex som gör att du måste mata in något i fältet annars blir det rött. */
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
                return Forms.efternamn;

            }
        };
    
     
     /*
     -------Postadress-------------
     */
     
        /*Skapar en blur funktion i inmatningsfältet */
        Postadress.onblur = function()
        {
            /*Skapar ett regex som gör att du måste mata in siffror och den ersätter se, white space och - med
            att den slår ihop dessa med siffrorna efter. */
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
                return Forms.postnummer;

            }   
     };
     
     /*
     -------Email-------------
     */
     
    /*Skapar en blur funktion i inmatningsfältet */
    Email.onblur = function()
    {
            /*Skapar en regex som gör att du måste skriva en korrekt epost adress för att fältet inte ska bli rött. */
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
                return Forms.emailadress;
            
            }
        };

        submit.onclick = function()
        {
            if((Forms.fornamn && Forms.efternamn && Forms.postnummer && Forms.emailadress) === true)
            {
                Forms.popupWindow(fname, sname, Postadress, Email);
                return false;
            }
            else
            {
                return false;
            }
      };
},
      
      
       /* Modal-popupfönster som bekräftar köpet en gång till. */
    popupWindow: function(fname, sname, Postadress, Email)
    {
        /*Skapar de olika elementen som visas i popupfönstret. */
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
        h2.id = "h2";
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
        submit2.id = "submit2";
        var close = document.createElement("button");
        close.id = "cancel";
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
};
  
window.onload = Forms.init;
