const destinos = [
    { nome: "Recife", dias: 5, valor: 1500 },
    { nome: "Gramado", dias: 7, valor: 3200 },
    { nome: "Salvador", dias: 4, valor: 1800 },
    { nome: "Rio de Janeiro", dias: 6, valor: 2500 },
    { nome: "Porto Seguro", dias: 5, valor: 2100 },
    { nome: "Fernando de Noronha", dias: 4, valor: 4500 }
];

const quantidade = destinos.length;
const total = destinos.reduce((s, d) => s + d.valor, 0);
const media = total / quantidade;
const maior = destinos.reduce((a, b) => a.valor > b.valor ? a : b);
const menor = destinos.reduce((a, b) => a.valor < b.valor ? a : b);
const acima2000 = destinos.filter(d => d.valor > 2000);
const dias5 = destinos.filter(d => d.dias >= 5).length;

console.log(quantidade, total, media);
console.log(maior.nome, menor.nome);
console.log(acima2000.map(d => d.nome));
console.log(dias5);
