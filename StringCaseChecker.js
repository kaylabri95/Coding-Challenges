// This function checks if a string is in uppercase

String.prototype.isUpperCase = function() {
  return String(this) === this.toUpperCase();
}