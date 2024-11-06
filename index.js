// run `node index.js` in the terminal
function printThreeAndFiveNumberLabels(startNumber, endNumber) {
  for (let i = startNumber; i <= endNumber; i++) {
    console.log(getResultantValue(i));
  }
}

function getResultantValue(number) {
  if (number % 3 === 0 && number % 5 === 0) {
      return "amazon";
  }
  if (number % 3 === 0) {
      return "google";
  }
  if (number % 5 === 0) {
      return "facebook";
  }
  return number;
}

printThreeAndFiveNumberLabels(1, 100);
