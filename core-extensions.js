/** 
 * Addition methods for core objects
 * @author  Keith Daulton
*/
(function() {
	
	if(!String.prototype.ltrim) {
		String.prototype.ltrim = function () { return this.replace(/^\s+/, ""); };
	}
	if(!String.prototype.rtrim) {
		String.prototype.rtrim = function () { return this.replace(/\s+$/, ""); };
	}
	if(!String.prototype.trim) {
		String.prototype.trim = function () { return this.ltrim().rtrim(); };
	}
	if(!String.prototype.onlyDigits) {
		String.prototype.onlyDigits = function () { return this.replace(/([\D\W])/gi, ""); };
	}
	if(!String.prototype.equalsIgnoreCase) {
		String.prototype.equalsIgnoreCase = function (arg) { return (this.toLowerCase() == String(arg).toLowerCase()); };
	}
	if(!String.prototype.equals) {
		String.prototype.equals = function (arg) { return (this.toString() == arg.toString()); };
	}
	if(!String.prototype.startsWith) {
		String.prototype.startsWith = function (arg) { return (this.match("^"+arg)==arg); };
	}
	if(!String.prototype.endsWith) {
		String.prototype.endsWith = function (arg) { return (this.match(arg+"$")==arg); };
	}
	if (!Date.prototype.isLeapYear) {
		Date.prototype.isLeapYear = function () {
			var year = this.getFullYear();
			return !(year % 4) && (year % 100) || !(year % 400) ? true : false;
		};
	}
	
})();