const pizzas = [
    { nome: "Calabresa", valor: 45 },
    { nome: "Portuguesa", valor: 52 },
    { nome: "Frango com Catupiry", valor: 58 },
    { nome: "Quatro Queijos", valor: 55 },
    { nome: "Marguerita", valor: 48 },
    { nome: "Bacon Especial", valor: 62 },
    { nome: "Chocolate", valor: 40 }
];

const total = pizzas.reduce((s, p) => s + p.valor, 0);
const media = total / pizzas.length;
const maior = pizzas.reduce((a, b) => a.valor > b.valor ? a : b);
const menor = pizzas.reduce((a, b) => a.valor < b.valor ? a : b);
const acima50 = pizzas.filter(p => p.valor > 50).length;

console.log(total, media, maior.nome, menor.nome, acima50);
