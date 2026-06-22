const palestras = [
    { nome: "React", participantes: 80 },
    { nome: "Angular", participantes: 45 },
    { nome: "Vue", participantes: 30 },
    { nome: "IA para Devs", participantes: 120 },
    { nome: "Carreira em Tecnologia", participantes: 95 },
    { nome: "UX/UI Design", participantes: 55 },
    { nome: "Backend com Java", participantes: 110 }
];

const total = palestras.reduce((s, p) => s + p.participantes, 0);
const media = total / palestras.length;
const maior = palestras.reduce((a, b) => a.participantes > b.participantes ? a : b);
const menor = palestras.reduce((a, b) => a.participantes < b.participantes ? a : b);
const acima90 = palestras.filter(p => p.participantes > 90).length;

const ranking = [...palestras].sort(
    (a, b) => b.participantes - a.participantes
);

console.log("Total:", total);
console.log("Média:", media);
console.log("Mais popular:", maior.nome);
console.log("Menos popular:", menor.nome);
console.log("Mais de 90 participantes:", acima90);

console.log("\nRANKING");
ranking.forEach((p, i) => {
    console.log(`${i + 1}º - ${p.nome} (${p.participantes})`);
});
