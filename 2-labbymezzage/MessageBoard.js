var MessageBoard = 
{
    /*Skapar ett message array */
    messages: [],
    
    /*Skapar en init function*/
    init: function(e)
    {
        /* Hämtar två id element från html documentet*/
        var new_message = document.getElementById("Question");
        var sendButton = document.getElementById("_Skriv");
        
        /* Skapar en onclick funktion på skicka knappen*/
        sendButton.onclick = function(){
          
            /* skapar en mess variabel som tar emot det inmatade värdet och datum.*/
            var mess = new Message(new_message.value, new Date());  
            
            /*sedan skickar in värdet i arrayet messages. */
            MessageBoard.messages.push(mess);
            MessageBoard.renderMessage();
          
        };
        
        /* Skapar en på keypress så om man håller ner shift och enter så byter man rad */
        new_message.onkeypress = function(enter)
        {
            if(!enter.shiftKey && enter.which === 13){
                sendButton.click();
                return false;
            }
        };
    },
    /* Skapar en funktion som tar hand om det inmatade värdet*/
    renderMessage: function(e){
        
        var writen_message = document.getElementById("Writen_message");
        writen_message.innerHTML = "Skrivna Meddelande:";
        
        /*Funktion som går igenom alla meddelande i arrayen. */
        for (var i = 0; i < MessageBoard.messages.length; i++) {
            /*Skapar taggar med id och sätter attribut. */
            var pTag = document.createElement("p");
            var pTagTid = document.createElement("p");
            var pTagRadera = document.createElement("p");
            var pTagInfo = document.createElement("p");
            var inputTag = document.createElement("input");
            var InfoTag = document.createElement("input");
            
            inputTag.setAttribute("type", "submit");
            inputTag.setAttribute("value", "Radera");
            InfoTag.setAttribute("type", "submit");
            InfoTag.setAttribute("value", "Info");
            
            inputTag.id = i;
            InfoTag.id = i;
            inputTag.className = "Remove_Message";
            InfoTag.className = "View_info";
            
            /*Skriver ut alla meddelande i arrayen och tiden */
            pTag.innerHTML = MessageBoard.messages[i].getHTMLText();
            pTagTid.innerHTML = MessageBoard.messages[i].getDate().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
            writen_message.appendChild(pTag);
            writen_message.appendChild(pTagTid);
            writen_message.appendChild(pTagRadera);
            writen_message.appendChild(pTagInfo);
            writen_message.appendChild(inputTag);
            writen_message.appendChild(InfoTag);
        }
        /*Skapar en variabel som räknar meddelandena och sedan skirver ut dessa. */
        var message_count = document.getElementById("Message_Count");
        message_count.innerHTML = "<p>" + "Antal Meddelande:" + "</p>"+ "<p>" + MessageBoard.messages.length + "</p>";
    
        var Remove_Message = document.getElementsByClassName("Remove_Message");
        /*Funktion som går ingenom ta bort meddelande */
        for(var j = 0; j < Remove_Message.length; j++){
            /*Onclick funktion som tar bort meddelanden om det finns några att ta bort och konfirmerar om man vill detta */
            Remove_Message[j].onclick = function()
            {
                if(MessageBoard.messages.length > 0)
                {
                    var tangent;
                    var str;
                    var messageID = this.getAttribute("id");
                    var r = confirm("Vill du ta bort meddelandet?");
                    
                        if(r === true)
                        {
                            x = "You pressed OK!";
                            MessageBoard.removeMessage(messageID);
                        }
                        else
                        {
                             x = "You pressed Cancel!";
                        }
                }
               
            };
        
        }
       /*Skapar en variabel som visar information när man klickar på knappen */
        var Info_Message = document.getElementsByClassName("View_info");
        for(var k = 0; k < Remove_Message.length; k++){
            Info_Message[k].onclick = function()
            {
                if(MessageBoard.messages.length > 0)
                {
                    var messageID = this.getAttribute("id");
                    MessageBoard.InfoMessage(messageID);
                   
                    
                }
               
            };
    
         }
    },
    /*Ta bort meddelanden funktion */
    removeMessage: function(messageID)
    {
        MessageBoard.messages.splice(messageID, 1);
        MessageBoard.renderMessage();
    },
    /*info meddelanden funktion */
    InfoMessage: function(messageID)
     {
         alert(MessageBoard.messages[messageID].getDateText());
         
     }
};
window.onload = MessageBoard.init;