let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "sim";
  
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: " último MacPatinhas",
    recorrente: "sim",
}

console.log("Bem-vindos, " + info.personagem + " e " + info2.personagem + "!");

  

for (let key in info) {
    if (
        info[key] === info.recorrente && 
        info[key] === "sim" &&
        info2[key] === "sim"
        ) {
            console.log("Ambos recorrentes");
        } else {
            console.log(info[key] + " e " + info2[key]); 
      }
  }

  