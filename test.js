function msToTime(reloadTime) {
  var seconds = Math.floor((reloadTime / 1000) % 60);
  var minutes = Math.floor((reloadTime / (1000 * 60)) % 60);
  var test = Math.floor((reloadTime / (1000 * 60 * 60)) % 24);
}

msToTime(10000);
