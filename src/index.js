module.exports = function check(str, bracketsConfig) {
  let bord = str.length;
  bracketsConfig.forEach(a => str = str.split(a[0] + a[1]).join(''));
  return str.length === 0 ? true : (str.length === bord ? false : check(str, bracketsConfig));
}