function msToTime(reloadTime) {
  var seconds = Math.floor((reloadTime / 1000) % 60);
  var minutes = Math.floor((reloadTime / (5000 * 60)) % 60);
  var experimental = Math.floor((reloadTime / (1000 * 60 * 60)) % 24);
  var newVariable;
}

msToTime(10000);
