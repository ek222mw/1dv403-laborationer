"use strict";

function Message(message, date){
    
    this.getText = function(){
        return message;
    }
    this.setText = function(_text){
        message = _text;
    }
    this.getDate = function(){
        return date;
    }
    this.setDate = function(_date){
        date = _date;
    }
}
Message.prototype.toString = function(){
    return this.getText() + " (" + this.getDate() + ")";
}
Message.prototype.getHTMLText = function()
{   
    var text = this.getText();
    return text.replace(/[\n\r]/g, "<br/>");
}
Message.prototype.getDateText = function()
{
    var date = this.getDate();
    return "Ditt medelande skapades " + date.toLocaleDateString() + " klockan " + date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}

        