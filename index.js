// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali']

function printBadges(names) {
  for (let counter = 0; counter < names.length; counter++) {
    console.log(`Welcome ${names[counter]}! You are employee #${counter + 1}.`);
  }
  return names;
}

function tailsNeverFails() {
  let tails = 0

  while (Math.random() < .5) {
    tails++
  }

  console.log(`${tails}`);

  return tails;
}

tailsNeverFails();
