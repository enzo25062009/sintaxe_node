let nomes = ["Ana", "Sofia", "Paulo", "Daniel", "Enzo"];

let busca = "Ana"; // pessoa que queremos

let encontrado = false;

// busca usando laço 
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === busca) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("Nome encontrado!");
} else {
    console.log("Nome não encontrado!");
}