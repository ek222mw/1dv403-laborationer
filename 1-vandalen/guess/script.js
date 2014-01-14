"use strict";

window.onload = function(){
	
	var secret; // Detta tal behöver bytas ut mot ett slumpat tal.

	// I denna funktion ska du skriva koden för att hantera "spelet"
	
        /* slumpar fram det hemliga talet*/
		secret = Math.floor( Math.random() * (100-1)+1) + 1;
	    var count = 0;
	    
        /* Skapar en funktion där man gissar efter det hemliga talet.
        Om talet är mindre än 1 och större än 100 så är det utanför intervallet*/
	    var guess = function(number){
	        count += 1;
	        if(number < 1 || number >100)
	        {   
	            return  [false, "Talet är utanför intervallet 0 - 100"];
	        }
	        
	        /* det inmatade värde är inte ett nummer */
	        if(isNaN(number))
	        {
	            return [false,"det du skrev är inte ett nummer"];
	        }
	        
	        /* Jämför om numret du matar in är större än det hemliga talet så
	        får du ett svar att det är lägre*/
	        if(number > secret)
	        {
	            return  [false, "Det hemliga talet är lägre!"];
	        }
	        
	        /* Tvärtom om man kollar på föregående jämförelse*/
	        if(number < secret)
	        {
	            return  [false, "Det hemliga talet är högre!"];
	        }
	        /* slutligen om det inmatade värdet är lika det hemliga så returneras true,
	        samt ett meddelande */
	        if(+number === secret)
	        {
	            return [true, "Grattis du vann! Det hemliga talet var "+secret+" och du behövde "+count+" gissningar för att hitta det."];
	        }

		// Plats för förändring.


		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};