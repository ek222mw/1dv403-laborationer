"use strict";
var Forms =
{
 
init: function(id)
{
     var input = 0;
     document.getElementById("genomfor_kop").remove()
     
     var form = document.getElementById("form");
     
     
     
     var fname = document.getElementById("Fornamn");
     fname.onblur = function()
     {
         var corrfname = /^\s*\S+.*/;
         var Validatingfname = fname.value.match(corrfname);
         if(Validatingfname.length > 0)
         {
             fname.classList.add("OK");
         }
         if(Validatingfname.length === null)
         {
            fname.classList.add("Error")
         }
         
     }
     var sname = document.getElementById("Efternamn");
     sname.onblur = function()
     {
     var corrsname = /^\s*\S+.*/;
     var Validatingsname = sname.value.match(corrsname);
     if(Validatingsname.length > 0)
     {
         sname.classList.add("OK");
     }
     if(Validatingsname.length === null)
     {
         sname.classList.add("Error")
     }
     }
     var Postadress = document.getElementById("Postadress");
     Postadress.onblur = function()
     {
     var corrPostadress = /^\b\d{5}\b;/g$;
     var felPostadress = /[SE]\w+\d{3}\w+\|-\d{2};/g;
     var ValidatingPostadress = Postadress.value.match(corrPostadress);
      if(Postadress.match(corrPostadress) === null)
     {
         corrPostadress.replace(felPostadress);
         ValidatingPostadress = Postadress.match(corrPostadress);
         if(ValidatingPostadress.length > 0)
         {
             Postadress.classList.add("OK");
         }
         if(ValidatingPostadress.length === null)
         {
            Postadress.classList.add("Error")
         }
     } 
     }
     var Email = document.getElementById("mail");
     Email.onblur = function()
     {
     var corrEpost = /@(.*?);/g;
     var ValidatingEmail = Email.value.match(corrEpost);
     if(ValidatingEmail.length > 0)
     {
         Email.classList.add("OK");
     }
     if(ValidatingEmail.length === null)
     {
         Email.classList.add("Error")
     }
    
     }
     if(input > 0)
     {
       var atag = document.createElement("a");
       atag.setAttribute("href", "#");
       atag.appendChild("genomfor_kop");
     }
     
     input++;
     
     form.onsubmit = function(e)
     {
        function AskAndSubmit(t)
{
  var answer = confirm("Are you sure you want to do this?");
  if (answer)
  {
    t.form.submit();
  }
}
     
     }
    }
};
Element.prototype.remove = function()
{
    this.parentElement.removeChild(this);
}
window.onload = Forms.init;