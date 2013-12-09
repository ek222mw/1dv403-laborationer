var MessageBoard = 
{
    messages: [],

    init: function(e)
    {
        
        var new_message = document.getElementById("Question");
        var sendButton = document.getElementById("_Skriv");
        
        
        
        console.log(MessageBoard.messages.length);
        
        
        sendButton.onclick = function(){
          
            var mess = new Message(new_message.value, new Date());    

            MessageBoard.messages.push(mess);
            
            
            //console.log(MessageBoard.messages[0].getDate());
            
            MessageBoard.renderMessage();
            //message_count = MessageBoard.messages.length;
            
        }
        new_message.onkeypress = function(enter)
        {
            if(!enter.shiftKey && enter.which === 13){
                sendButton.click();
                return false;
            }
        }
    },
    renderMessage: function(e){
        
        var writen_message = document.getElementById("Writen_message");
        writen_message.innerHTML = "Skrivna Meddelande:";
        
        
        for (var i = 0; i < MessageBoard.messages.length; i++) {
            
            var pTag = document.createElement("p");
            var pTagTid = document.createElement("p");
            var pTagRadera = document.createElement("p");
            var pTagInfo = document.createElement("p");
            
            var inputTag = document.createElement("input");
            inputTag.setAttribute("type", "submit");
            inputTag.setAttribute("value", "Radera");
            inputTag.id = i;
            inputTag.className = "Remove_Message";
            var InfoTag = document.createElement("input");
            InfoTag.setAttribute("type", "submit");
            InfoTag.setAttribute("value", "Info");
            InfoTag.id = i;
            InfoTag.className = "View_info";
            
            
            pTag.innerHTML = MessageBoard.messages[i].getHTMLText();
            pTagTid.innerHTML = MessageBoard.messages[i].getDate().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
            writen_message.appendChild(pTag);
            writen_message.appendChild(pTagTid);
            writen_message.appendChild(pTagRadera);
            writen_message.appendChild(pTagInfo);
            writen_message.appendChild(inputTag);
            writen_message.appendChild(InfoTag);
        }
        
        var message_count = document.getElementById("Message_Count");
        message_count.innerHTML = "<p>" + "Antal Meddelande:" + "</p>"+ "<p>" + MessageBoard.messages.length + "</p>";
        
        
        
        
        var Remove_Message = document.getElementsByClassName("Remove_Message");
        
        for(var j = 0; j < Remove_Message.length; j++){
            Remove_Message[j].onclick = function()
            {
                if(MessageBoard.messages.length > 0)
                {
                    var tangent;
                    var str;
                    var messageID = this.getAttribute("id");
                    var r = confirm("Vill du ta bort meddelandet?")
                    {if (r == true)
                        {
                            x = "You pressed OK!";
                            MessageBoard.removeMessage(messageID);
                        }
                        else
                        {
                             x = "You pressed Cancel!";
                        }
                
                                
                    }
                    
                   
                    
                }
               
            }
        
        }
       

        var Info_Message = document.getElementsByClassName("View_info");
         for(var k = 0; k < Remove_Message.length; k++){
            Info_Message[k].onclick = function()
            {
                if(MessageBoard.messages.length > 0)
                {
                    var messageID = this.getAttribute("id");
                    MessageBoard.InfoMessage(messageID)
                   
                    
                }
               
            }
    
         }
    },
    removeMessage: function(messageID)
    {
        console.log(MessageBoard.messages.length);
        MessageBoard.messages.splice(messageID, 1);
        console.log(MessageBoard.messages.length);
        MessageBoard.renderMessage();
    },
    InfoMessage: function(messageID)
     {
         alert(MessageBoard.messages[messageID].getDateText())
         
     }
};
window.onload = MessageBoard.init;