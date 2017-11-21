var fortunes = [
  "You will be successful soon.",
  "Someone will do something nice for you today.",
  "Pigeons will poop on you today.... sorry.",
  "JACKPOT!!!! Higher chance for you to win the lotto today."

];

function tellFortune() {
  var randomNumber = Math.floor(Math.random() * fortunes.length);

   document.getElementById("fortune").innerHTML = fortunes[randomNumber];
};
