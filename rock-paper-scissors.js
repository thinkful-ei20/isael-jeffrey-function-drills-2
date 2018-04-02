// 1 rock
// 2 paper
// 3 scissors

function rockPaperScissors(choice) {
  if(choice < 1 || choice > 3)
    throw new Error("Must be between 1-3");

  let ai = Math.floor(Math.random() * 3) + 1;
  if(choice === 1)
  {
    if(ai === 1)
      return "TIE";
    else if(ai === 2)
      return "ROCK loses to PAPER";
    else
      return "ROCK bests SCISSORS";    
  }
  else if(choice === 2)
  {
    if(ai === 1)
      return "PAPER beats ROCK";
    else if(ai === 2)
      return "TIE";
    else
      return "PAPER loses to SCISSORS";
  }
  else
  {
    if(ai === 1)
      return "SCISSORS loses to ROCK";
    else if(ai === 2)
      return "SCISSORS beats PAPER";
    else
      return "TIE";
  }
}

let output = rockPaperScissors(3);
console.log(output);