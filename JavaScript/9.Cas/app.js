const demir = "Demir";

for (let i = 0; i < 10; i++) {
  console.log(demir);
}

// Ispisati brojeve od 1 do 10, izuzev broja 2 i 5.

// Nacin 1

for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// Nacin 2
// continue keyword koristimo kada zelimo da preskocimo radnju za tu iteraciju i nastavimo petlju sa narednom iteracijom.

for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 5 || i === 7) {
    continue;
  } else {
    console.log(i);
  }
}

// 2. Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja.

// break izvrsava prekidanje petlje. Ako zelimo da se u nekom momentu prestane izvrsavanje onda koristimo break.

for (let i = 1; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  }
  console.log(i);
}
