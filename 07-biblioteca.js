const categorias = [
    { nome: "Programação", qtd: 12 },
    { nome: "Matemática", qtd: 8 },
    { nome: "Ficção", qtd: 15 },
    { nome: "História", qtd: 10 },
    { nome: "Biografia", qtd: 5 },
    { nome: "Ciências", qtd: 11 },
    { nome: "Tecnologia", qtd: 14 }
];

const total = categorias.reduce((s, c) => s + c.qtd, 0);
const media = total / categorias.length;
const maior = categorias.reduce((a, b) => a.qtd > b.qtd ? a : b);
const menor = categorias.reduce((a, b) => a.qtd < b.qtd ? a : b);
const acima10 = categorias.filter(c => c.qtd > 10).length;

console.log(total, media, maior.nome, menor.nome, acima10);
