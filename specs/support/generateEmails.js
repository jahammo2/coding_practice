function shuffle(array) {
  let randomNum;

  for (let i = array.length; i; i--) {
    randomNum = Math.floor(Math.random() * i);
    [array[i - 1], array[randomNum]] = [array[randomNum], array[i - 1]];
  }

  return array;
}

export default function generateEmails() {
  let emailAddress;
  let initialEmails = [];

  for (let ii = 2; ii > 0; ii--) {
    for (let i = 25000; i > 0; i--) {
      emailAddress = `foo${i}@email.com`;
      initialEmails.push(emailAddress);
    }
  }

  for (let i = 50000; i > 0; i--) {
    emailAddress = `bar${i}@email.com`;
    initialEmails.push(emailAddress);
  }

  return shuffle(initialEmails);
}
