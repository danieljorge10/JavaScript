const apreensoes = [125000, 87500, 230000, 56000, 145000, 78000, 310000, 95500];

const total = apreensoes.reduce((a, b) => a + b, 0);
const media = total / apreensoes.length;
const maior = Math.max(...apreensoes);
const menor = Math.min(...apreensoes);
const acima100k = apreensoes.filter(v => v > 100000).length;

console.log("Total:", total);
console.log("Média:", media);
console.log("Maior:", maior);
console.log("Menor:", menor);
console.log("Acima de 100 mil:", acima100k);
