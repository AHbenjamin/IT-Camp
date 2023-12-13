// Domaci od proslog casa

// Ispisati parne brojeve od 1 do 20 na dva nacina

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 2; i < 21; i += 2) {
  console.log(i);
}

// Ispisati dvostruku vrednost prirodnih brojeva id 6 do 14

for (let i = 6; i < 15; i++) {
  const doubleValue = i * 2;
  console.log(doubleValue);
}

for (let i = 6; i < 15; i++) {
  console.log(i * 2);
}
