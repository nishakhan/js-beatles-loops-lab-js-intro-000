// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var counter = 0; counter < musicians.length; counter++) {
    emptyArray.push(musicians[counter] + " plays " + instruments[counter])
  }
  return emptyArray
}

function johnLennonFacts(facts) {
  var emptyArray = []
  let i = 0
  while (i < facts.length) {
    emptyArray.push(facts[i] + "!!!");
    i++;
    }
  return emptyArray
}
