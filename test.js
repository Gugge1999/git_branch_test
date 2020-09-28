function msToTime(reloadTime) {
  var seconds = Math.floor((reloadTime / 1000) % 60);
  var minutes = Math.floor((reloadTime / (1000 * 60)) % 60);
  var hours = Math.floor((reloadTime / (1000 * 60 * 60)) % 24);

  // TEST 1
  hours = hours < 10 ? '0' + hours : hours;
  // TEST 2
  minutes = minutes < 10 ? '0' + minutes : minutes;
  // TEST 3
  seconds = seconds < 10 ? '0' + seconds : seconds;
  // Main code
  // Even better main code
  return console.log(`${hours}:${minutes}:${seconds}`);
}

msToTime(10000);
