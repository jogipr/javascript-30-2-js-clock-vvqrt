function moveHand() {
  const secondHand = document.querySelector('.second-hand');
  const date = new Date();

  const seconds = (date.getSeconds() / 60) * 360;
  secondHand.style.transform = `rotate(${seconds + 90}deg)`;
  //to do : Only second hand is moving other hand are ready yet , will do it later
}

moveHand();

setInterval(moveHand, 1000);
