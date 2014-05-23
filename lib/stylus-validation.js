module.exports = plugin;

function plugin() {
  return function(style) {
    style.include(__dirname);
  }
}
