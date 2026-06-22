const jogos = [
    { nome: "FIFA 27", valor: 350 },
    { nome: "GTA VI", valor: 420 },
    { nome: "Minecraft", valor: 120 },
    { nome: "EA FC 27", valor: 380 },
    { nome: "Call of Duty", valor: 310 },
    { nome: "Red Dead Redemption 2", valor: 280 },
    { nome: "The Witcher 4", valor: 450 }
];

const total = jogos.reduce((s, j) => s + j.valor, 0);
const media = total / jogos.length;
const maior = jogos.reduce((a, b) => a.valor > b.valor ? a : b);
const menor = jogos.reduce((a, b) => a.valor < b.valor ? a : b);
const acima300 = jogos.filter(j => j.valor > 300).length;

console.log(total, media, maior.nome, menor.nome, acima300);
