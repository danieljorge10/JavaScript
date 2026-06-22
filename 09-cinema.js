const filmes = [
    { nome: "Vingadores", ingressos: 150 },
    { nome: "Avatar", ingressos: 120 },
    { nome: "Jurassic World", ingressos: 90 },
    { nome: "Minecraft", ingressos: 180 },
    { nome: "Superman", ingressos: 140 },
    { nome: "Missão Impossível", ingressos: 110 }
];

const total = filmes.reduce((s, f) => s + f.ingressos, 0);
const media = total / filmes.length;
const maior = filmes.reduce((a, b) => a.ingressos > b.ingressos ? a : b);
const menor = filmes.reduce((a, b) => a.ingressos < b.ingressos ? a : b);
const acima130 = filmes.filter(f => f.ingressos > 130).length;

console.log(total, media, maior.nome, menor.nome, acima130);
