// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var counter = 0; counter < musicians.length; counter++) {
    emptyArray.push(musicians[counter] + " plays " + instruments[counter])
  }
  return emptyArray
}

function johnLennonFacts() {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  var emptyArray = []
  let i = 0
  while (i < facts.length) {
    emptyArray.push(facts[i] + "!!!");
    i++;
    }
  return emptyArray
}
