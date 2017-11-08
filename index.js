// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali']

function printBadges(names) {
  for (let counter = 0; counter < names.length; counter++) {
    console.log(`Welcome ${names[counter]}! You are employee #${counter + 1}.`);
  }
  return names;
}

function maybeTrue() {
  Math.random() < .5;
}

function tailsNeverFails() {
  let tails = 0;

  while (tails < 5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
