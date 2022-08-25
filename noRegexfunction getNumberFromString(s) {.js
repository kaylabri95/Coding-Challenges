function getNumberFromString(s) {
  return Number(s.split('').filter(i => '0123456789'.includes(i)).join(''));
}