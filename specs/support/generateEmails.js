function shuffle(array) {
  let randomNum;
  const shuffledArray = array;

  for (let i = shuffledArray.length; i; i--) {
    randomNum = Math.floor(Math.random() * i);
    [shuffledArray[i - 1], shuffledArray[randomNum]] = [
      shuffledArray[randomNum],
      shuffledArray[i - 1],
    ];
  }

  return shuffledArray;
}

export default function generateEmails() {
  let emailAddress;
  const initialEmails = [];

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
