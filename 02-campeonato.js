const times = [
    { nome: "Sport", gols: 3 },
    { nome: "Náutico", gols: 1 },
    { nome: "Santa Cruz", gols: 2 },
    { nome: "Ceará", gols: 4 },
    { nome: "Fortaleza", gols: 2 },
    { nome: "Bahia", gols: 5 },
    { nome: "Vitória", gols: 1 },
    { nome: "CRB", gols: 3 }
];

const total = times.reduce((s, t) => s + t.gols, 0);
const media = total / times.length;
const maior = times.reduce((a, b) => a.gols > b.gols ? a : b);
const menor = times.reduce((a, b) => a.gols < b.gols ? a : b);
const acima2 = times.filter(t => t.gols > 2);

console.log("Total:", total);
console.log("Média:", media);
console.log("Maior:", maior.nome);
console.log("Menor:", menor.nome);
console.log("Mais de 2 gols:", acima2.map(t => t.nome));
