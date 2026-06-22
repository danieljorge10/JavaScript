const palestras = [
    { nome: "IA Generativa", inscritos: 120 },
    { nome: "Java Moderno", inscritos: 85 },
    { nome: "React Avançado", inscritos: 95 },
    { nome: "Cibersegurança", inscritos: 60 },
    { nome: "Cloud Computing", inscritos: 140 },
    { nome: "Desenvolvimento Mobile", inscritos: 75 }
];

const total = palestras.reduce((s, p) => s + p.inscritos, 0);
const media = total / palestras.length;
const maior = palestras.reduce((a, b) => a.inscritos > b.inscritos ? a : b);
const menor = palestras.reduce((a, b) => a.inscritos < b.inscritos ? a : b);
const acima100 = palestras.filter(p => p.inscritos > 100).length;

console.log(total, media, maior.nome, menor.nome, acima100);
