var title = "Yesterday";
var fromAlbum = "Act Naturally";
var genres = ["Baroque Pop", "Chamber pop"];
var lengthSong = 2;
var releaseYear = 1976;
var itIsFromUK = true; 

var personnel = {
vocal: "Paul McCartney",
violin: ["Tony Gilbert", "Sidney Sax", ], 
viola: "Kenneth Essex",
cello: ["Francisco Gabarro" ,"Peter Halling"],
producer: "George Martin",
engineer: "Norman Smith",

saySinger: function(){
    return this.vocal
},
sayEngineer: function(){
    return this.engineer
},

sayViolin: function(){
    var violinistas =""
    for(var i=0; i<= this.violin.length; i++){
        violinistas += this.violin[i] + ", ";
    }
    return violinistas
}

}


console.log(title);
console.log(fromAlbum);
console.log(genres);
console.log(genres[0]);
console.log(genres[1]);
console.log(lengthSong);
console.log(releaseYear);
console.log(itIsFromUK);
console.log(personnel.vocal);
console.log(personnel.viola);
console.log(personnel.cello);
console.log(personnel.producer);
console.log(personnel.saySinger());
console.log(personnel.sayEngineer());
console.log(personnel.sayViolin());