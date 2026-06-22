const tempos = [15, 22, 10, 35, 18, 27, 12, 40, 16, 25];

const media = tempos.reduce((a, b) => a + b, 0) / tempos.length;
const maior = Math.max(...tempos);
const menor = Math.min(...tempos);
const acima20 = tempos.filter(t => t > 20).length;

console.log("Média:", media);
console.log("Maior:", maior);
console.log("Menor:", menor);
console.log("Mais de 20 min:", acima20);
