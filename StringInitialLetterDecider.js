// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument

function areYouPlayingBanjo(name) {
  let startingLetter = name.charAt(0).toLowerCase()
  if(startingLetter === "r"){
    return name + " plays banjo"
  }else{
    return name + " does not play banjo"
  }
}