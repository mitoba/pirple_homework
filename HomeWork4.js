

const philosphers = ["Socrates", "Plato", "Niche", "Spinoza", "Pele", "Bush"]


function isMortal (name = "Zeus"){

    let isMortal = false;

    if( typeof name === "string"){
        if(philosphers.find( k => k === name)){
            isMortal = true
        }
    }else{
        console.log("Names are just strings")
    }
    console.log(isMortal)
    return  isMortal
}

isMortal(4)
isMortal("Socrates")


function cakeFlavor(arrayCakes, isChocolate){
     let flavor = ""
    if(isChocolate === true){
        flavor = "Chocolate"
    } else{
        arrayCakes.map( (k) =>{
            if(k !== "Chocolate"){
                flavor = k
            }

        })
    }
    return flavor
}

cakeFlavor(["Chocolate", "Vanella"], false)