"use strict";

var makePerson = function(persArr){

    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    
    var result = {};
    var maxAge;
    var minAge;
    var arrNamn = [];
    var persages = [];
    var averageAge;
    var sum = 0;

    
    /*for-loop som bryter ner objektet till arrayer innehållands Namn och Ålder.*/
    for (var i = 0; i < persArr.length; i++) {
        sum += persArr[i].age;
        arrNamn.push(persArr[i].name);
        persages.push(persArr[i].age);
        
    }
    
    /*Formler för att få ut lägsta och högsta ålder.*/
    persages.sort();
    maxAge = persages[persages.length-1];
    averageAge = Math.round(sum / persages.length);
    minAge = persages[0];
    
    
    /*Sorterar och sätter ihop namnen till en sträng.*/
    arrNamn.sort(function(a, b){return a.localeCompare(b);});
    var names = arrNamn.join(", ");

    /*lägger in alla variabler som ska användas i result*/
    result = {
        averageAge: averageAge,
        names: names,
        minAge: minAge,
        maxAge: maxAge
    };
    
    /*sedan returnerar result*/
    return result;




};