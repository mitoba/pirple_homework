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

