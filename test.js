function msToTime(reloadTime) {
  var seconds = Math.floor((reloadTime / 1000) % 60);
  var minutes = Math.floor((reloadTime / (1000 * 60)) % 60);
  var hours = Math.floor((reloadTime / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  // Better code
  // Even better code
  return console.log(`${hours}:${minutes}:${seconds}`);
}

msToTime(10000);
