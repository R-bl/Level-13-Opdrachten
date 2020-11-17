const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah"
"Bram";
const totalAmount = 200;

// minimum leeftijd check
if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Nope, je mag niet naar binnen");
}
// Vrouw of geen vrouw
if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

// Bob of geen bob
if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

//Kortin op bier
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Helaas, geen korting voor jou!");
}

// Gratis bier
if (name === "Sarah" | "Bram") {
    console.log("Gefeliciteerd! Gratis biertje voor jou!");
} else {
    console.log("Helaas geen gratis bier voor jou");
}

// totalAmount Gratis Producten
if (totalAmount > 25 && totalAmount <= 50) {

    console.log("Gratis portie bietenballen!");

} else if (totalAmount > 50 && totalAmount <= 100) {

    console.log("Gratis portie Nachos Aribaa!");

} else if (totalAmount > 100) {

    console.log("Gratis fles Champagne!");
}