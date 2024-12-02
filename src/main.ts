interface grupoMusical {  
    nombreGrupo: String;
    añoFundacion: Number;
    activo: boolean;
    generoMusical: string;
}

const PopRock = "🎵 pop rock";
const Rock = "🎸 rock";
const HardRock = "🤘hard rock";
const Clasica = "🎼clasica";



const grupo01 = {
    nombreGrupo: "The Beatles",
    añoFundación: 1960,
    activo: true,
    generoMusical: PopRock
}
const estiloGrupo01 = "font-weight:bold; font-size:16px; background-color:green;";

console.log(`%c${"The Beatles"}`,
    "font-weight: bold; font-size: 16px; background-color: green");
    
console.log(grupo01)

const grupo02 = {
    nombreGrupo: "Queen",
    añoFundación: 1970,
    activo: false,
    generoMusical: Rock
}
const estiloGrupo02 = "font-weight:bold; font-size:16px; background-color:green;";

console.log(`%c${"Queen"}`,
    "font-weight: bold; font-size: 16px; background-color: green");
    
console.log(grupo02)


const grupo03 = {
    nombreGrupo: "AC DC",
    añoFundación: 1973,
    activo: true,
    generoMusical: HardRock
}
const estiloGrupo03 = "font-weight:bold; font-size:16px; background-color:green;";

console.log(`%c${"AC DC"}`,
    "font-weight: bold; font-size: 16px; background-color: green");
    
console.log(grupo03)

const grupo04 = {
    nombreGrupo: "Ludwig van Beethoven",
    añoFundación: 1770,
    activo: false,
    generoMusical: Clasica
}
const estiloGrupo04 = "font-weight:bold; font-size:16px; background-color:green;";

console.log(`%c${"Ludwig van Beethoven"}`,
    "font-weight: bold; font-size: 16px; background-color: green");
    
console.log(grupo04)

const grupo05 = {
    nombreGrupo: "The Rolling Stones",
    añoFundación: 1962,
    activo: true,
    generoMusical: Rock
}
const estiloGrupo05 = "font-weight:bold; font-size:16px; background-color:green;";

console.log(`%c${"The Rolling Stones"}`,
    "font-weight: bold; font-size: 16px; background-color: green");
    
console.log(grupo05)
