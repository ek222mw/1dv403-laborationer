"use strict";

window.onload = function()
{
    /* skapar en funktion birthday som innehåller en variabel med dagens datum
    och födelsedagens datum*/
    var birthday = function(date)
    {
        date = new Date();
        var today = new Date();
        var birthdays = new Date(input.value);
        /* jämför om födelsedagens tid är mindre än dagens tid.
        om så är så sätter jag födelsedagens till dagens datum + 1.*/
        if(birthdays.getTime() < today.getTime())
        {
            birthdays.setFullYear((today.getFullYear()+1));
        }
        /* räknar ut hur många millisekunder det går på en dag,
        samt differansen mellan födelsedagens datum och dagens.
        
        Delar tiden kvar med millisekunderna variabeln för att få hur många dagar det är kvar
        till födelsedagen osorterat.
        */
        var msPerday = 24*60*60*1000;
        var timeleft = (birthdays.getTime()- today.getTime());
        var e_daysleft = timeleft / msPerday;
        var daysleft = Math.floor(e_daysleft);

        daysleft = daysleft +1;
        /* Jämför att om det är 0 dagar kvar så returnerar reurnerar jag daysleft*/
        if(daysleft === 0)
        {
            return daysleft;
        }
        /* om det är 365 dagar kvar så är det din födelsedag */
        if(daysleft === 365)
        {
            return 0;
        }
        /* kollar sedan om dagar kvar är större än 0 och returnerar sedan daysleft slutligen. */
        if( daysleft > 0)
        {
            return Math.abs(daysleft);
        }
        else
        {
            return Math.abs(daysleft +365);
        }   
        
        return daysleft;


    };
	
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});


};
