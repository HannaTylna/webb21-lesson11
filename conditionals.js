const conditional = true;// "", 0, null, -1, " "
/* if(conditional){
    console.log("sant");
} else {
    console.log("falskt")
} */
conditional ? console.log("sant") : console.log("falskt");

const age = 10;

age<18 ? console.log("cannot vote") : console.log("can vote");

if(age<13){
    console.log("Barn");
} else if (age >=13 && age <20){
    console.log("Tonåring");
} else if(age>20 && age>65){
    console.log("Vuxen")
} else{
    console.log("Pensionär")
}

const currentWeather = "rainy";
switch(currentWeather){
    case "rainy":
        console.log("Det kommer regna");
        break;
    case "sunny":
        console.log("Det kommer vara soligt");
        break;
    case "molnigt":
        console.log("Det kommer vara molnigt");
        break;
    default: {
        console.log("Ogiltigt väder")
    }
}