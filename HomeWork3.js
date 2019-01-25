

const philosphers = {
    names: ['Socrates', 'Plato', 'Zaratrusta'],
    human: "yes",
    mortals: true,
}

const gods = {
    names: ['Zeus', 'Hades'],
    human: "no",
    mortals: false
}

console.log(philosphers.names[0])


if(philosphers.names[0] === 'Socrates' && philosphers.human === "yes" ) {
    console.log("then " + philosphers.names[0] + " is mortal" )
} else { 
    console.log("then is not human")
}


if (!philosphers.mortals){
    console.log("maybe is a God " + "maybe is " + gods.names[0])
} 

const isChocolate = false

if( isChocolate) {
    console.log("umm yummy chocolate cake")
} else {
    console.log("then is vanilla")
}